type DeciderProps = { status: auth.Status;};
class LoginDeciderComponent extends Component<DeciderProps> {
  componentWillMount() { checkLoggedIn();  }
  render() {
    switch (this.props.status) {
      case "checking":
        return <SplashScreen />;
      case "logged in":
      case "logging out":
        return (
          <MyApp
            ref={(navigatorRef: NavigationContainerComponent) => {
              NavigationService.setTopLevelNavigator(navigatorRef);
            }}
          />
        );
      case "logged out":
      case "logging in":
        return <LoginScreen />;
    }
    return <LoginScreen />;
  }
}