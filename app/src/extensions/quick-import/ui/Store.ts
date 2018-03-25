import { Container } from 'unstated';
import remote from '../../../portal/client';

interface QuickkImportState {
  components: any[];
}

export default class CounterContainer extends Container<QuickkImportState> {
  public state = {
    components: []
  };

  constructor() {
    super();

    remote(
      'QuockImports',
      {
        addComponents: (components: any) => {
          this.addComponents(components);
        }
      },
      (server: any) => {
        return 3;
      }
    );
  }

  public addComponents(components: any[]) {
    this.setState({
      components
    });
  }
}
