describe('A function to determine whether or not the input is day of the week', function(){
    it('should say Monday is a weekday. ', function(){
        assert.equal(isWeekday('Monday'), true);
    });
    it('should say Sunday is not a weekday. ', function(){
        assert.equal(isWeekday('Sunday'), false);
    });
    it('should say florist is not a weekday. ', function(){
        assert.equal(isWeekday('florist'), false)
    });
});