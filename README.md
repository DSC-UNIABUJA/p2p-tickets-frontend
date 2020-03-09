# Ticketing App

## Usage 

first install dependencies

```bash
npm i 
```

> after doing this, install prettier and eslint as extensions in your editor(preferably vscode) then configure your editor to format files on save with **eslint**.

run dev server

```bash
npm run start
```

build 

```bash
npm run build
```

show warnings and errors to the console(eslint & prettier)

```bash
npm run lint
```

fix the errors(eslint and prettier)

```bash
npm run lint:fix
```

## Main Tools

- Redux(with thunk) for state management
- Material UI and styled-components for styling
- Prettier and ESLint to maintain code styles and linting
- There are others but these are the most significant. You can find the rest by perusing the package.json file


## App structure

### Landing and events pages
There will be a main landing page. this will contain one or two sentences about what the app is all about and links(in form of cards) to upcoming events. on clicking on a card, a user will be taken to a `/event/:eventid` route. To make life easier for us, the `eventid` param will be the id of the event from the database(given to us by the API) route. This is a dedicated page for the specified event that will contain the following

- A header(the name of the event)
- A picture(event banner or something. This is compulsory) for the event
- Not more than 400(or any length we decide to go with) characters about the event
- Location of the event specified along with a google map link
- Phone number(s) and email address(es) to contact about the event
- Price(s) and date of the event.
- Below will be a link where users can purchases tickets(This I think will take them to paystack where the purchase will be made)

The remaining part of the landing page will be one or two more things about our app. very simple and straight to the point with a link that will prompt event organizers to create an account with us and start doing business!

### About page

This will contain detailed info about our brand and most importantly, **pricing** and **contact links**. I think the pricing shouldn't be in the landing page. The main purpose of the landing page should be for users to see events, click, make payments and make both parties smile(we and our users :) )

### Auth pages

- **Register:** This is where event organizers can create accounts. After creating accounts, they'll be required to verify their account from their email before they'll be allowed to login. We'll need to discuss together how we wish to implement this

- **Login:** This is where users can login. On successful login, they'll be taken immediately to their dashboard pages. So essentially, once they're logged in, they're automatically authenticated.

- **Reset Password:** Only authenticated users can reset password.

- **Forgot Password:** This will contain where they can input their email address so a link(that will be set to expire after less than an hour) will be sent to their email address where they can click for confirmation so their password can be reset.

### Dashboard 

This is where event organizers can manage their events. They'll see realtime insight here. 

- Number of tickets bought so far
- Number of tickets left
- phone number and email of users who bought tickets
- Modals for creating events.
- They can delete events but can't delete them once at least one person has paid.
- On the client, we'll make sure users thoroughly verify value of their inputs before finally creating an event.

We'll neet to discuss what more to add to the dashboard

### Settings page

Here authenticated users can do basic tweaks

## Business Logic

This is the most important part of building this app that we must discuss together and agree on. But here are some things I feel are reasonable

- Event organizers can choose to make events public. If an event is public, it will be shown in the landing page as a list of upcoming events, If it's not public, only the link will be used to access the event. 

- Once at least one user has paid for an event, a user can't delete the event neither can they change anything about the event

- Before a user pays for an event, they'll input their phone number and email address. On successful payment, they'll be given a unique ID that will be sent to their email address. 

- Users can choose to buy more than one ticket. In this case, all IDs(tickets) will be sent to the same email address.

- The purpose of collecting phone numbers and email address is this: Once a payment has been made, all info will be sent to the event organizer. They'll see the data on their dashboard. Email and phone number only. The ID will be randomly generated and sent to only the payer. On the day of the event, there will be a method of verifying the ID.(we'll need to think and agree on a method of achieving this) 

- Users can only delete their accounts if they don't have any upcoming event or no user has paid for any of those.

- More to come in due time 
