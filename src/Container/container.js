import React from 'react';
import Services from '../services/services';
import Profile from '../profile/profile';
import About from '../About/about';
import Feed from '../feed/feed';
import Work from '../work/work';
import Blog from '../blog/blog';
import Contact from '../Contact/contact';
import {Link} from 'react-scroll';

class Container extends React.Component{
    render(){
        return(<div><Profile></Profile>
        <About id="about"></About>
        <Services id="services"></Services>
        <Feed id="feed"></Feed>
        <Work id="work"></Work>
        <Blog id="blog"></Blog>
        <Contact id="contact"></Contact></div>)
    }
}
export default (Container)