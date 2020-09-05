import * as React from 'react';
import { NetInfo } from 'react-native';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import OnBoardingNavigatorS from './Routes';
import { PublicSiteStoreState } from './redux/public_site_reducer';
import { toggleConnection } from './redux/dynamics/dynamics_action_creators';
import i18n from './i18n';

export interface DispatchProps {
  onToggleConnection: (onlineState: boolean) => void;
}

interface Props extends DispatchProps {}

class TranslateStack extends React.Component<Props, {}> {
  componentDidMount() {
    NetInfo.isConnected.fetch().then((isConnected) => {
      this.props.onToggleConnection(isConnected);
    });
    NetInfo.isConnected.addEventListener('connectionChange', (isConnected) =>
      this.props.onToggleConnection(isConnected),
    );
  }

  render() {
    return <OnBoardingNavigatorS screenProps={{ t: i18n.getFixedT('') }} />;
  }
}

function mapStateToProps(state: PublicSiteStoreState) {
  return {
    dynamics: state.dynamicsStore.online,
  };
}

function mapDispatchToProps(dispatch: any): DispatchProps {
  return {
    onToggleConnection: (onlineState: boolean) => {
      dispatch(toggleConnection(onlineState));
    },
  };
}

const ReloadAppOnLanguageChange = withTranslation('translation')(
  connect(mapStateToProps, mapDispatchToProps)(TranslateStack),
);

export default class Translator extends React.Component<{}, {}> {
  render() {
    return <ReloadAppOnLanguageChange />;
  }
}
