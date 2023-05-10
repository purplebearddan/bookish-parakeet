class Game {
    constructor(meta = { title, description, ageRating, genre }, price = 0.0) {
        this.meta = meta;
        this.price = price;
        this.console;
    }

    play() {
        return `Playing ${this.meta.title}${
            this.console ? ` on ${this.console}` : ""
        }!`;
    }

    changeGameTitle(newTitle) {
        this.meta.title = newTitle;
    }
}

class Playstation4Game extends Game {
    constructor(meta, price) {
        super(meta, price);
        this.console = "Playstation 4";
    }
}
class XboxOneGame extends Game {
    constructor(meta, price) {
        super(meta, price);
        this.console = "Xbox One";
    }
}
class SwitchGame extends Game {
    constructor(meta, price) {
        super(meta, price);
        this.console = "Nintendo Switch";
    }
}

const zelda = new SwitchGame(
    {
        title: "The Legend of Zelda: Breath of the Wild",
        description:
            "After a 100-year slumber, Link wakes up alone in a world he no longer remembers. Now the legendary hero must explore a vast and dangerous land and regain his memories before Hyrule is lost forever. Armed only with what he can scavenge, Link sets out to find answers and the resources needed to survive.",
        ageRating: "10",
        genre: ["Action", "adventure"],
    },
    50
);

console.log(zelda.play());
zelda.changeGameTitle("The Legend of Zelda: Tears of the Kingdom");

console.log(zelda.play());
