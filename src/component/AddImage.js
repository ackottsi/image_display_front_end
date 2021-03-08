import React, {useStatae} from 'react';
import '../AddImage.css';


const AddImage = (props) => {
    console.log(props)


    return(

        <div className="AddImage">

      
            <form onSubmit={this.login}>
                <input
                    name='title'
                    type='text'
                    placeholder='title'
                    value={this.state.username}
                    onChange={this.loginOnChange}
                />
                <input
                    name='comments'
                    type='text'
                    placeholder='comments'
                    value={this.state.comments}
                    onChange={this.loginOnChange}
                />
                 <input
                    name='url'
                    type='text'
                    placeholder='title'
                    value={this.state.url}
                    onChange={this.loginOnChange}
                />
                <input
                    name='date'
                    type='date'
                    placeholder='date'
                    value={this.state.date}
                    onChange={this.loginOnChange}
                />
                <input type='submit' value='Add Image' />
            </form>

            
        </div>
    );
}

export default AddImage;