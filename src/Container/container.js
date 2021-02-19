import React from 'react';
import Services from '../services/services';
import Profile from '../profile/profile';
import About from '../About/about';
import Feed from '../feed/feed';
import Work from '../work/work';
import Blog from '../blog/blog';
import Contact from '../Contact/contact';
import { makeStyles } from '@material-ui/core/styles';


const styles = makeStyles({
    container: {
        width: '80%',
        marginLeft: '20%',
        ['@media (max-width: 1274px)']: {
            width: '100%',
            marginLeft: 'unset'
        }
    }
})


export default function Container (props) {
    
    const classes = styles(props);

        return(<div className={classes.container}><Profile></Profile>
        <About id="about"></About>
        <Services id="services"></Services>
        <Feed id="feed"></Feed>
        <Work id="work"></Work>
        <Blog id="blog"></Blog>
        <Contact id="contact"></Contact></div>)
}