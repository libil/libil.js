var CONSONANT_MAP = [
  'h', 'n', 'c', 'r', 'k',
  'd', 't', 's', 'w', 'l',
  'p', 'dh', 'j', 'y', 'ny',
  'm', 'g', 'b', 'th', 'ng'
];

function inverseCap(s) {
  sc = s.slice(1);
  return s.charAt(0).toLowerCase() + sc.toUpperCase();
}

function capitalize(s) {
  sc = s.slice(1);
  return s.charAt(0).toUpperCase() + sc.toLowerCase();
}

function fixCase(orig, mapped) {
  if(orig.toLowerCase() == orig) {
    return mapped.toLowerCase();
  }
  else if(capitalize(orig) == orig) {
    return capitalize(mapped);
  }
  else if (orig.toUpperCase() == orig) {
    return mapped.toUpperCase();
  }
  else if(inverseCap(orig) == orig) {
    return inverseCap(mapped);
  }
  else {
    return mapped;
  }
}

function mapToken(t) {
  idx = CONSONANT_MAP.indexOf(t.toLowerCase());
  if (idx === -1) {
    return t;
  } 
  map_idx = -1;
  if (idx <= 9) {
    map_idx = idx + 10
  }
  else {
    map_idx = idx - 10;
  }

  return CONSONANT_MAP[map_idx];
}

function mapFixToken(t) {
  m = mapToken(t);
  return fixCase(t, m); 
}

function fixSourceVocal(s) {
  var vocals = ['a', 'i', 'u', 'e', 'o'];
  var pair = s.slice(0,2);
  var c = s.charAt(0);
  if (vocals.indexOf(c) != -1) {
    if (capitalize(pair) == pair) {
      return "H" + c.toLowerCase() + s.slice(1);
    }
    else if (pair.toUpperCase() == pair) {
      return "H" + s;
    }
    else {
      return 'h' + s;
    }
  }
  else {
    return s;
  }
}

function _tokenize(s) {
  var w = fixSourceVocal(s)
    var tokens = [];
  var pair = "";
  if (!s.trim()) {
    return tokens;
  }
  for (var i = 0; i < w.length; ++i) {
    c    = w[i]
      pair = w.slice(i, i+2);
    if (-1 != CONSONANT_MAP.indexOf(pair.toLowerCase())) {
      ++i; // skip one index
      tokens.push(pair);  
    }
    else {
      tokens.push(c);
    }
  }
  return tokens;

}

module.exports = {
  tokenize: _tokenize,
  convert_word: function(s) {
    var mappedTokens = _tokenize(s).map(function(t) {
      return mapFixToken(t);
    });
    return mappedTokens.join('');
  },
  convert_word_ngalam: function(s) {
    var tokens = _tokenize(s);
    tokens.reverse();
    return fixCase(s, tokens.join(''));
  },
  convert: function(s, ngalam) {
    var words = s.split(" ");
    cw = this.convert_word;
    cwm = this.convert_word_ngalam;
    var mappedWords = words.map(ngalam === true ? cwm : cw); 
    return mappedWords.join(' ');
  }
};
