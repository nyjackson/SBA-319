import mongoose from "mongoose"

const charactersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    patron: {
        type: String,
        default: null
    }, main_weapon: {
        type: String,
        default: "Sword"
    }, 
    armor: {
        type:String, 
        default: "medium",
    },
    specializations: {
        type: Array, 
        default: null
    }
})

/***
 * Ex: 
 * const warr = {
 * type: strength,
 * name: "warrior",
 * weapons: [greatsword, lance, spear, short sword...]
 * armor: [medium, heavy]
 * specializations: [Monk, Guardian, Beserker, ]
 * base-hp: 100hp
 * pre-req: null
 * description: "Focusing on physical prowess and brute force, warriors excel in close combat and is the starting class for many of the physical classes."
 * char-examples: [
 * {
 * hero_name: Mo and Krill
 * game: deadlock
 * game-genres: [MOBA, Action]
 * hero_class: tank
 * }
 * ]
 * 
 * const cleric = {
 * type: magic
 * patron:  // null for learned wizards (pledged god if sorcerer etc)
 * }
 * 
 */

const Char = mongoose.model("class", classSchema, "classes")

export default Char;