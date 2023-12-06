class Teacher {
    private _firstName: string;
    private _lastName: string;
    private _fullTimeEmployee: boolean;
    private _yearsOfExperience?: number;
    private _location: string;
    private _additionalAttributes: Record<string, unknown>;
  
    constructor(firstName: string, lastName: string, fullTimeEmployee: boolean, location: string) {
      this._firstName = firstName;
      this._lastName = lastName;
      this._fullTimeEmployee = fullTimeEmployee;
      this._location = location;
      this._additionalAttributes = {};
    }
  
    public get firstName(): string {
      return this._firstName;
    }
  
    public set firstName(firstName: string) {
      // Restrict firstName modification to initialization
      if (!this._firstName) {
        this._firstName = firstName;
      } else {
        throw new Error('Cannot modify firstName after teacher initialization');
      }
    }
  
    public get lastName(): string {
      return this._lastName;
    }
  
    public set lastName(lastName: string) {
      /* Restrict lastName modification to initialization */
      if (!this._lastName) {
        this._lastName = lastName;
      } else {
        throw new Error('Cannot modify lastName after teacher initialization');
      }
    }
  
    public get fullTimeEmployee(): boolean {
      return this._fullTimeEmployee;
    }
  
    public get yearsOfExperience(): number | undefined {
      return this._yearsOfExperience;
    }
  
    public set yearsOfExperience(yearsOfExperience: number | undefined) {
      this._yearsOfExperience = yearsOfExperience;
    }
  
    public get location(): string {
      return this._location;
    }
  
    public set location(location: string) {
      this._location = location;
    }
  
    public addAdditionalAttribute(key: string, value: unknown): void {
      this._additionalAttributes[key] = value;
    }
  
    public get additionalAttributes(): Record<string, unknown> {
      return this._additionalAttributes;
    }
  }
  

  const teacher1 = new Teacher('John', 'Doe', true, 'New York');
  console.log(teacher1); // Prints teacher object with defined attributes
  teacher1.yearsOfExperience = 5; // Modifying optional attribute
  console.log(teacher1); // Prints teacher object with updated yearsOfExperience
  teacher1.addAdditionalAttribute('contract', true); // Adding custom attribute
  console.log(teacher1); // Prints teacher object with additional attribute
  
  // modify firstName after initialization
  try {
    teacher1.firstName = 'Jane';
  } catch (error) {
    console.error(error.message); // Prints error message
  }  