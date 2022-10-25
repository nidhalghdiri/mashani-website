import React, {Component} from 'react';
import classes from './ContactContent.module.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
class ContactContent extends Component {
    componentDidMount(){
        Aos.init({
          duration : 2000
        })
    }
    render(){
        return(
            <div className={classes.Contact}>
                <div className={classes.Title} data-aos="fade-right">
                    <h1>CONTACT US</h1>
                </div>
                <div className={classes.ContactContent}>
                <div>
                <form action="mailto:info@almashani.com" method="post" enctype="text/plain" data-aos="zoom-in">
                    <div className={classes.FormItem}>
                    <label>Name</label>
                    <input type="text"  />
                    </div>
                    <div className={classes.FormItem}>
                    <label>Email</label>
                    <input type="text"  />
                    </div>
                    <div className={classes.FormItem}>
                    <label>Message</label>
                    <textarea></textarea>
                    </div>
                    <div className={classes.Btn}>
                    <button>Send</button>
                    </div>
                    
                </form>
                </div>
                </div>
            </div>
        );
    }
}

export default ContactContent;

