# partnisi-BE

This is the backend project of the Dion app. Dion is a party Scheduling app where you can create events and view other events

In order to get started please git clone the repo and then
install the dependencies by running npm i, then npm run start to run the backend.

## Models

-User
name: String, required
email: String, required
password_digest: String, required

-Profile
user: ObjectId, ref: 'User'
profilename: String
dob: Date
bio: String
photo: String

-Event
user: ObjectId, ref: 'User', required
title: String, required
description: String
dateTime: Date, required
location: String
host: ObjectId, ref: 'User'
attendees: Array of ObjectId, ref: 'User'
numberOfAttendees: Number

-AttendanceRequest
event: ObjectId, ref: 'Event', required
user: ObjectId, ref: 'User', required
status: String, enum ['pending', 'approved', 'rejected'], default: 'pending'

## Routes

API Endpoints

Starting API endpoint for the backend is /partynisi 

Initial user route ('partynisi/', usersRoutes)
Initial event route("partynisi/event", EventRoutes);
Initial profile route("partynisi/profile", ProfileRoutes)
Initial attendance route('partynisi/attend', attendaceRoutes)

-User Routes
Sign Up: POST /sign-up (ex:localhost:3000/partynisi/sign-up)
Sign In: POST /sign-in
Verify: GET /verify
Change Password: POST /change-password

-Event Routes
Get All Events: GET /event
Get Event by ID: GET /event/:id
Get Events by User: GET /event/user/:userId
Create Event: POST /event
Update Event: PUT /event/:id
Delete Event: DELETE /event/:id

-Profile Routes
Get All Profiles: GET /profile
Get Profile by User ID: GET /profile/:userId
Create Profile: POST /profile

-Attendance Routes
Request Attendance: POST /attend
Get All Attendances: GET /attend
Get Attendance by ID: GET /attend/:id
Update Attendance Status: PUT /attend/:id
Delete Attendance Request: DELETE /attend/:id


