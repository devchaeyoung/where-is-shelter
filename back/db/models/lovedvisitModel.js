import {lovedVisit} from "../schemas/lovedvisit.js";

class lovedVisitModel{
      //creating new lovedvisit document with all components
    static async create({ newLovedVisit }) {
        const createNewVisits = await lovedVisit.create(newLovedVisit);
        return createNewVisits;
    }
    
    static async findusersvisits({ user_id }) {
        const lovedVisits = await lovedVisit.find({ user_id });
        return lovedVisits;
    }
      // when field name and parameter name are the same {user_id} is the right format

      //there can document with one shared user_id with differnet shelter_id
      // or vice versa. 2 fieldname is needed to find one document

    static async findonedocument({ user_id, shelter_id }) {
        const lovedVisit = await lovedVisit.findOne({ user_id, shelter_id });
        return lovedVisit;
    }
      
    static async deleteonedocument({ user_id, shelter_id }) {
        const deletedShelter = await lovedVisit.deleteOne({ user_id, shelter_id });
        return deletedShelter;
    }

    //I dont think there has to be update feature in this model so i'm skipping it for now.
    // arguement: 2 and only fields of schema of lovedvisits are key components of other collection

    //deleting all lovedvisits of 
    static async deleteAllusersvisits({user_id}){
        const deletedlist = await lovedVisit.deleteMany({user_id}, (err) => {
          if (err) {
            console.error("Error deleting documents:", err);
          } else {
            console.log("All documents deleted successfully.");
          }
        });
        return deletedlist;
    }
}

export { lovedVisitModel };