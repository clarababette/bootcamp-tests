describe('A function to say hello', function(){

    it('should say hello to Shonda. ', function(){
        assert.equal(greet('Shonda'), 'Hello, Shonda');
    });

    it('should say hello to Barry. ', function(){
        assert.equal(greet('Barry'), 'Hello, Barry');
    });
});
