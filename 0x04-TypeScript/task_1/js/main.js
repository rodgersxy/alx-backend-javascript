var Teacher = /** @class */ (function () {
    function Teacher(firstName, lastName, fullTimeEmployee, location) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._fullTimeEmployee = fullTimeEmployee;
        this._location = location;
        this._additionalAttributes = {};
    }
    Object.defineProperty(Teacher.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (firstName) {
            // Restrict firstName modification to initialization
            if (!this._firstName) {
                this._firstName = firstName;
            }
            else {
                throw new Error('Cannot modify firstName after teacher initialization');
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Teacher.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (lastName) {
            /* Restrict lastName modification to initialization */
            if (!this._lastName) {
                this._lastName = lastName;
            }
            else {
                throw new Error('Cannot modify lastName after teacher initialization');
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Teacher.prototype, "fullTimeEmployee", {
        get: function () {
            return this._fullTimeEmployee;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Teacher.prototype, "yearsOfExperience", {
        get: function () {
            return this._yearsOfExperience;
        },
        set: function (yearsOfExperience) {
            this._yearsOfExperience = yearsOfExperience;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Teacher.prototype, "location", {
        get: function () {
            return this._location;
        },
        set: function (location) {
            this._location = location;
        },
        enumerable: false,
        configurable: true
    });
    Teacher.prototype.addAdditionalAttribute = function (key, value) {
        this._additionalAttributes[key] = value;
    };
    Object.defineProperty(Teacher.prototype, "additionalAttributes", {
        get: function () {
            return this._additionalAttributes;
        },
        enumerable: false,
        configurable: true
    });
    return Teacher;
}());
var teacher1 = new Teacher('John', 'Doe', true, 'New York');
console.log(teacher1); // Prints teacher object with defined attributes
teacher1.yearsOfExperience = 5; // Modifying optional attribute
console.log(teacher1); // Prints teacher object with updated yearsOfExperience
teacher1.addAdditionalAttribute('contract', true); // Adding custom attribute
console.log(teacher1); // Prints teacher object with additional attribute
// modify firstName after initialization
try {
    teacher1.firstName = 'Jane';
}
catch (error) {
    console.error(error.message); // Prints error message
}
