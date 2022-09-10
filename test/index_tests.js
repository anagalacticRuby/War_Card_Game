var expect = chai.expect;

describe("My Functions", function () {
  describe("#assignValue", function () {
    it("Should make sure that 52 card values are made.", function () {
        console.log("Testing the assignValue function...");
      let testCards = new Card();
      testCards.assignValue();
      expect(testCards.cardValue.length).to.equal(52);
    });
  });
  describe("#takeTurn", function(){
    it("Should draw the top two cards of 2 player's decks.",function(){
        console.log("Testing the takeTurn function...")
        
        let playerOne = new Player();
        let playerTwo = new Player();
        //Two player objects are required to use takeTurn()
        playerOne.playerDeck.push(5);
        playerTwo.playerDeck.push(6);
        //Those player objects also need cards in their deck to be drawn

        takeTurn(playerOne,playerTwo);
        //Call the takeTurn method for testing

        expect(playerTwo.playerDeck.length).to.equal(0);
        expect(playerOne.playerDeck.length).to.equal(0);
        //If this method works, we expect both players decks to be empty
    })
    it("Should add one point to a player's score", function(){
        console.log("The takeTurn function should add one point to a player's score.")
        let playerOne = new Player();
        let playerTwo = new Player();
        //New player objects need to be created in order to use takeTurn
        playerOne.playerDeck.push(4);
        playerTwo.playerDeck.push(13);
        //For simplicity sake, we'll make both players have 1 card each
        takeTurn(playerOne,playerTwo);
        //call takeTurn with the recently created & populated players
        expect(playerTwo.playerScore).to.equal(1);
        //Player 2 should have 1 point, because 13 > 4
    })
  })
});
