const ContactController = require("../controllers/ContactController");
const sequelize = require("../db/models/index").sequelize;


describe("ContactController", () => {

    it("Should be defined", () => {
        expect(ContactController).toBeDefined();
    })

    beforeEach((done) => {
        this.book = new ContactController();
 
 // #1
        sequelize.sync({force: true}).then((res) => {
          done();
        })
        .catch((err) => {
          done();
        });
     });


     describe("#addContact()", () => {

        it("should add a single contact into the book", (done) => {

        this.book.addContact("Alice", "001-101-1010", "alice@sample.com").then((contact) => {
          expect(contact.name).toBe("Alice");
          expect(contact.phone).toBe("001-101-1010");
          expect(contact.email).toBe("alice@sample.com");

          done();
        })
        .catch((err) => {
          done();
        });
   
    });
})
})
