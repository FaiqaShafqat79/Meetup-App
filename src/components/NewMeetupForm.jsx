import Card from '../ui/Card'
import classes from '../styles/NewMeetupForm.module.css'
import { redirect, Form } from 'react-router-dom'

const NewMeetupForm = () => {

    return (
        <Card>
            <Form method="post" className={classes.form}>
                <div className={classes.control}>
                    <label htmlFor="title">Meetup Title</label>
                    <input type="text" name="title" id="title" required/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="image">Meetup Image</label>
                    <input type="url" name="image" id="image" required/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="address">Address</label>
                    <input type="text" name="address" id="address"/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="description">Description</label>
                    <textarea rows={3} type="text" name="description" id="description"/>
                </div>
                <div className={classes.actions}>
                    <button>Add Meetup</button>
                </div>
            </Form>
        </Card>
    )
}

export default NewMeetupForm

export const action = async ({ request }) => {
    const formData = await request.formData()
    const meetupData = Object.fromEntries(formData)
    await fetch('http://localhost:8080/meetups', {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    return redirect('/')
}