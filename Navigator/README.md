# Navigator

This components save the history of navigation, to busy/simples actions.

## How to use?

1.  Install the [React Transition Group](https://github.com/reactjs/react-transition-group/tree/v1-stable) `$ npm install react-transition-group@1.x --save`

2.  Clone/Copy&Paste this folder into your component folder.

## Implement

This component is very simple use, the `Navigator.View` with will showed have the prop `name` equal to prop `active` at `Navigator` wrapper;

```javascript
  import Navigator from 'your/directory/Navigator';
  ...
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

### backButton: any

This prop define some component to user like back button at the navigator container.

```javascript
  ...
  <Navigator active={this.state.route} backButton={<YourBestBackButton />}>
    ...
  </Navigator>
  ...
```

### loop: bool `(default: false)`

By default, if you change the `active` prop with equal name passed previously, this component not change the content because the prop `loop` is false, but if you need pass the same route 'n' times, pass this prop in `Navigator`.

```javascript
  ...
  <Navigator active={this.state.route} loop>
    ...
  </Navigator>
  ...
```
