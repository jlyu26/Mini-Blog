# Blog Post

A blog post JavaScript application based on React Router and Redux Form.

<img width="510" alt="blog-post-sketch" src="https://user-images.githubusercontent.com/20265633/35830986-23575ffa-0a96-11e8-8add-65da58fdddad.PNG">

## Challenges

1. Add different pages and navigate users around the application to see their content
2. Load data from a back-end API based on the user's current route
3. Forms that include validation, post to server and save the record, and retrieve them later

## Key Points

**1. herokuapp API Reference** [[Document]](http://reduxblog.herokuapp.com/) (Not THE [Heroku](https://www.heroku.com/what))...

There are four different routes to make request and get access to. 1st route will fetch a list of all the different blog posts that the user has created. 2nd route will accept a post type request to create a brand new blog post and save it to the server. 3rd route fetches a particular post (the intent is to provide the ID of the post we're trying to fetch). 4th is intend to delete a particular post, so we're supposed to provide the ID the post we want to delete.

**2. Postman**

Postman is a network request client that we can use to make network request to arbitrary endpoints.

<img width="693" alt="blog-post-postman" src="https://user-images.githubusercontent.com/20265633/35835928-94343a58-0aab-11e8-99bf-683ad1ae5f13.PNG">


**3. React Router, Single Page Applications**

With React router, we no longer making requests to our server to get a web page, reveiving a web page back, and showing the page. Instead React router intercepts changes to the url, look at the url and decide to display a different set of components on the screen based on what that new url is.

<img width="501" alt="blog-post-react-router" src="https://user-images.githubusercontent.com/20265633/35835973-c77e916a-0aab-11e8-9515-462a621ce323.PNG">

The architecture above shows the idea behind **single page applications**, that we no longer navigatingbetween distinct HTML documents that are being created by some remote web server. Instead, we're always dealing with a single HTML document, and relying JavaScript to change the set of components that users see appearing on the screen.

**4. BrowserRouter, Route from react-router-dom**

**BrowserRouter object** is what interact with history library and decides exactly what to do based on a change inside the url. The **Route** is a React component that we can render inside of any other React component that we put together inside of our application. The purpose of Route component is to provide configuration of the mapping from url to component set. So both of them are about providing customization/configuration to React Router.

```jsx
<BrowserRouter>
    <div>
    	Header
    	<Route path="/hello" component={Hello} />
    	<Route path="/goodbye" component={Goodbye} />
    </div>
</BrowserRouter>
```

**5.**