var should = require('chai').should(),
    libil  = require('../index');

describe('Tokenizing Word to Tokens', function() {
  it ('tokenize lowercase strings', function() {
    libil.tokenize("bajingan").should.eql(['b','a','j','i','ng','a','n']);
    libil.tokenize("NYOTHE").should.eql(['NY', 'O', 'TH', 'E']);
  });
  it ('tokenize mixed strings', function() {
    libil.tokenize("Dhahar").should.eql(['Dh', 'a', 'h', 'a', 'r']);
  });
  it ('tokenize word started using vocals', function() {
    libil.tokenize("asu").should.eql(['h', 'a', 's', 'u']);
  })
});

describe('Converting Word and Sentences to Walikan (Yogya and Malang)', function() {
  it ('convert word to Walikan', function() {
    libil.convert_word("asu").should.eql("pabu");
    libil.convert_word("nyothe").should.eql("kowe");
    libil.convert_word("saciladh").should.eql("bajingan");
    libil.convert_word("Dhahar").should.eql("Napay");
  });
  it ('convert word to Malang variants', function() {
    libil.convert_word_ngalam("Malang").should.eql("Ngalam");

  });
  it ('convert sentence both in Malang and Yogyakarta variants', function() { 
    libil.convert("Pulang Malang dari Surabaya", true).should.eql("Ngalup Ngalam irad Ayabarus");
    libil.convert("Cahe Dewe Kowe!").should.eql("Jape Methe Nyothe!");
  });
});
