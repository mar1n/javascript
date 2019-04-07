class Game {

    constructor(hometeam, awayTeam) {
        this.hometeam = hometeam;
        this.awayTeam = hometeam;
        this.score = this._score();
    }

    get homeScore() {
      if(this._homeScore !== undefined) {
        return this._homeScore;
      } else {
        this.simulate();
        return this._homeScore;
      }
    }

    get awayScore() {
      if(this._awayScore !== undefined) {
        return this._awayScore;
      } else {
        this.simulate();
        return this._awayScore;
      }
    }

    simulate() {
        this._homeScore = this.score['HomeScore'];
        this._awayScore = this.score['AwayScore'];

        if(this.score['HomeScore'] > this.score['AwayScore']) {
            this.hometeam.points = 3;
            this.awayTeam.points = 0;
        } else if (this.score['HomeScore'] == this.score['AwayScore']) {
            this.hometeam.points = 1;
            this.awayTeam.points = 1;
        } else {
            this.hometeam.points = 0;
            this.awayTeam.points = 3;
        }
        return `Points in League\n${this.hometeam.Name} Points ${this.hometeam.points}\n${this.awayTeam.Name} Points ${this.awayTeam.points} `;
    }

    /* My private method */
    _score() {
      var homeScore = [];
      var awayScore = [];
      var score = [];
      for(let x = 0; x < 1e2; x++) {
          homeScore.push(Math.floor(Math.random() * 4));
          awayScore.push(Math.floor(Math.random() * 4));
      }
      homeScore = homeScore.reduce((a, b) => a + b );
      awayScore = awayScore.reduce((a, b) => a + b );
      score['HomeScore'] = homeScore;
      score['AwayScore'] = awayScore;
      return score;
    }

}

class Team {
    constructor(Name) {
        this.Name = Name;
    }
}

team1 = new Team('Los Angeles Lakers');
team2 = new Team('Chicago bulls');

test = new Game(team1, team2);
//console.log(test.simulate());
console.log(test.homeScore);
console.log(test.awayScore);
