import React, {Component} from 'react';

export class Contact extends Component {

    render(){

        return (
            <form>
            <label for="fname">First name:</label><br />
            <input
              type="text"
              id="fname"
              name="fname"
              placeholder="First Name"
            /><br />
            <label for="lname">Last name:</label><br />
            <input
              type="text"
              id="lname"
              name="lname"
              placeholder="Last Name"
            /><br />
            <label for="date">Date:</label><br />
            <input type="date" id="date" name="date" /><br />
            <label for="tel">Phone Number:</label><br />
            <input type="tel" id="tel" name="tel" placeholder="(555)111-1234" /><br />
            <label for="comment">
              Comment<br /><textarea
                cols="35"
                rows="5"
                name="mes"
                id="comment"
                placeholder="Thoughts and concerns? "
              ></textarea></label
            ><br />
            <button>Submit</button>
          </form>
        )
    }
}
export default Contact;
