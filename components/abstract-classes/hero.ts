import {Skills} from '../interfaces/skills';
import {KindOfAdvantage} from '../enums/kind-of-advantage';

export abstract class Hero {
    private health: number;
    private heroStory: string;
    private skills: Skills;
    private advantage: KindOfAdvantage;

    constructor(health: number, heroStory: string, skills: Skills, advantage: KindOfAdvantage) {
        this.health = health;
        this.heroStory = heroStory;
        this.skills = skills;
        this.advantage = advantage;
    }

    getHealth(): number {
        return this.health;
    }
    tellHeroStory(): string {
        return this.heroStory;
    }
    showHeroFeatures(): string {
        return `Health: ${this.health}\n` +
            `Advantage: ${this.advantage}\n` +
            `Kind of attack: ${this.skills.Attack}\n` +
            `Ability: ${this.skills.Ability}\n`;
    }

    abstract attack(): any;
    abstract applyAbility(): any;
}
