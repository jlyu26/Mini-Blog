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

[[React Router Documents]](https://reacttraining.com/react-router/web/guides/philosophy)

With React router, we no longer making requests to our server to get a web page, reveiving a web page back, and showing the page. Instead React router intercepts changes to the url, look at the url and decide to display a different set of components on the screen based on what that new url is.

<img width="501" alt="blog-post-react-router" src="https://user-images.githubusercontent.com/20265633/35835973-c77e916a-0aab-11e8-9515-462a621ce323.PNG">

The architecture above shows the idea behind **single page applications**, that we no longer navigating between distinct HTML documents that are being created by some remote web server. Instead, we're always dealing with a single HTML document, and relying JavaScript to change the set of components that users see appearing on the screen.

**4. BrowserRouter, Route, Switch from react-router-dom**

**BrowserRouter object** is what interact with history library and decides exactly what to do based on a change inside the url. The **Route** is a React component that we can render inside of any other React component that we put together inside of our application. The purpose of Route component is to provide configuration of the mapping from url to component set. So both of them are about providing customization/configuration to React Router.

The Switch component takes in a collection of different routes, and decides to only render the first route that matches the current URL. So we need to put the most specific routes at the top of the list. (So "/" should be at end of the list.)

```jsx
<BrowserRouter>
    <div>
    	Header
    	<Route path="/hello" component={Hello} />
    	<Route path="/goodbye" component={Goodbye} />
    </div>
</BrowserRouter>
```

**5. Link from react-router-dom**

To do navigation on classic websites (navigating between distinct HTML documents), we use a simple anchored tag `<a href="">`. When using React Router, we no longer use anchor tags, because we don't want browser to go do another request and try to fetch another HTML document from the server. We only want React Router to show a new set of components.

The "Link" component can be thinked as a classic anchor tag, which renders "links" that users can click and navigate around the application. The different between a `<Link>` tag and an `<a>` tag is, when we click on a `<Link>` tag, it has a couple of event handlers on it that prevent the default behavior, such like issue another HTTP request to fetch another HTML document from the server. 

```jsx
<Link className="btn btn-primary" to="/posts/new">
	Add a Post
</Link>
```

**6. Application States**

In this case we don't need to maintain an "activePost" state, but instead use post ID which is reflected in URL to decide what to show on '/posts/:id'. To make more quickly and easier to find a particular post, we use object with post id as key to store state.

<img width="552" alt="blog-post-state" src="https://user-images.githubusercontent.com/20265633/36040470-849b3d0e-0d93-11e8-9ce7-93af215b4196.PNG">

**7. Lodash mapKeys()**

`_.mapKeys()`[[Document]](https://lodash.com/docs#mapKeys) we provide first argument of an array, the second argument is the property we want to pull off of each object in the array to use as the key on the resulting object.

```javascript
const posts = [
  { id: 4, title: "hi" },
  { id: 23, title: "bye" },
  { id: 36, title: "how is going" }
];

const state = _.mapKeys(posts, 'id')
// {
// 	"4":{"id":4,"title":"hi"},
// 	"23":{"id":23,"title":"bye"},
// 	"36":{"id":36,"title":"how is going"}
// }

console.log(state["4"]);
// {"id":4,"title":"hi"}
```

**8. React Lifecycle Method**

A lifecycle method is a function on a React component class that is automatically called by React. 

`componentDidMount()` will automatically called by React immediately AFTER this component has shown up inside the DOM. However, it doesn't make a difference whether or not we call that action creator before or after the component renders on screen, because fetching data is an asynchronous operation. Whenever we reach out to API to fetch some data, it takes some amount of time to fetch the data and had it be returned to our browser, and React doesn't have any concept to figure out not render the component until after the pre-loading operation, but always render the component as soon as it can.

**9. **
