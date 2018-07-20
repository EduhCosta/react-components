# Navigator

This components save the history of navigation, to busy/simples actions.

## How to use?

1.  Install the [React Transition Group](https://github.com/reactjs/react-transition-group/tree/v1-stable) `$ npm install react-transition-group@1.x --save`

2.  Clone this folder and paste into your component folder

3.  Import to use `import Navigator from 'your/directory/Navigator'`

## Implement

This component is very simple use, the `Navigator.View` with will showed have the prop `name` equal to prop `active` at `Navigator` wrapper;

```javascript
  render() {
    return (
      ...
        <Navigator active={this.state.route}>
          <Navigator.View name="routeA">
            View One
          </Navigator.View>
          <Navigator.View name="routeB">
            View two
          </Navigator.View>
          <Navigator.View name="routeC">
            View Three
          </Navigator.View>
        </Navigator>
      ...
    );
  }
```

## Props

- backButton
  This prop define some component to user like back button at the navigator container.

```javascript
  ...
  <Navigator active={this.state.route} backButton={<YourBestBackButton />}>
    <Navigator.View name="routeA">View One</Navigator.View>
    <Navigator.View name="routeB">View two</Navigator.View>
    <Navigator.View name="routeC">View Three</Navigator.View>
  </Navigator>
  ...
```
