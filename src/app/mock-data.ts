export class MockData{
 //public static validationPasswordPattern:string='^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$'
 public static validationPasswordPattern:string='^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$'
public static adminCreateCustomerValidationMessage={
    'u_dateOf_Purchased': [
      { type: 'required', message: 'Date is required.' }
    ],
    'u_MachinePurchased': [
      { type: 'required', message: 'Machine name is required.' }
    ],
    'name': [
      { type: 'required', message: 'Name is required.' }
    ],
    'lastname': [
      { type: 'required', message: 'Last name is required.' }
    ],
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Please enter a valid email.' }
    ],
    'phone': [
      { type: 'required', message: 'Phone is required.' },
      { type: 'maxLength', message: 'The phone is incorrect' },
      { type: 'pattern', message: 'The phone is incorrect' }
    ],
    'alter': [
      { type: 'maxLength', message: 'The phone is incorrect' },
      { type: 'pattern', message: 'The phone is incorrect' }
    ],
    'u_password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 5 characters long.' },
      { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number.' }
    ],
    'u_cpassword': [
      { type: 'required', message: 'Confirm password is required.' }
    ],
    'matching_passwords': [
      { type: 'areEqual', message: 'Password mismatch.' }
    ],
    'terms': [
      { type: 'pattern', message: 'You must accept terms and conditions.' }
    ],
  };
  public static adminEnggValidationMsg={
    'u_Joining_date': [
      { type: 'required', message: 'Date is required.' }
    ],
    'engg_type': [
      { type: 'required', message: 'Machine name is required.' }
    ],
    'name': [
      { type: 'required', message: 'Name is required.' }
    ],
    'lastname': [
      { type: 'required', message: 'Last name is required.' }
    ],
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Please enter a valid email.' }
    ],
    'phone': [
      { type: 'required', message: 'Phone is required.' },
      { type: 'maxLength', message: 'The phone is incorrect' },
      { type: 'pattern', message: 'The phone is incorrect' }
    ],
    'alter': [
      { type: 'maxLength', message: 'The phone is incorrect' },
      { type: 'pattern', message: 'The phone is incorrect' }
    ],
    'u_password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 5 characters long.' },
      { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number.' }
    ],
    'u_cpassword': [
      { type: 'required', message: 'Confirm password is required.' }
    ],
    'matching_passwords': [
      { type: 'areEqual', message: 'Password mismatch.' }
    ],
    'terms': [
      { type: 'pattern', message: 'You must accept terms and conditions.' }
    ],
  };
}
