import React from "react";
import Savol from "./savol/savol";
import Tamom from "./tamom/tamom";

export default class Test extends React.Component {

  state = {
    avtiveSavol: 0,
    activeResult: null,
    results: {},
    finish: false,
    savollar: [
      {
        text: '2 ni 2 ga qushganda nechi javob chiqadi?',
        id: 1,
        tugri: 3,
        javoblar: [
          { text: '3', id: 1 },
          { text: '10', id: 2 },
          { text: '4', id: 3 },
          { text: '8', id: 4 },
          { text: '6', id: 5 },
        ]
      }, {
        text: 'Yer dumoloqmi?',
        id: 2,
        tugri: 2,
        javoblar: [
          { text: 'Ha', id: 1 },
          { text: 'Yuq', id: 2 },
        ]
      }, {
        text: 'Reactni qauerlardaishlatish mumkin?',
        id: 3,
        tugri: 3,
        javoblar: [
          { text: 'Hamma web saytlar', id: 1 },
          { text: 'Ilova sifatidagi ', id: 2 },
          { text: "Ikkalasi ham to'g'ri", id: 3 },
        ]
      }
    ]
  }

  funBosildi = id => {
    const savolTugriJavobi = this.state.savollar[this.state.avtiveSavol].tugri;

    this.setState({
      activeResult: { [id]: savolTugriJavobi === id ? 'success' : 'danger' },
      results: {
        ...this.state.results,
        [this.state.avtiveSavol]: savolTugriJavobi === id ? 'success' : 'danger'
      }
    });

    const st = window.setTimeout(() => {
      if (this.isFinished()) {
        this.setState({
          finish: true
        });
      } else {
        this.setState({
          avtiveSavol: this.state.avtiveSavol + 1,
          activeResult: null
        });
      }

      clearTimeout(st);
    }, 1000);
  }

  isFinished = () => {
    return this.state.avtiveSavol + 1 === this.state.savollar.length;
  }

  onQayta = () => {
    this.setState({
      avtiveSavol: 0,
      activeResult: null,
      results: {},
      finish: false
    });
  }

  render() {
    return (
      <div>
        <h1 className="m-5 h1">Savollarga javob bering.</h1>
        {
          this.state.finish ?
            <Tamom results={this.state.results} savollar={this.state.savollar} onQayta={this.onQayta} /> :
            <Savol malumot={this.state.savollar[this.state.avtiveSavol]} soni={this.state.savollar.length} activeResult={this.state.activeResult} onBosildi={this.funBosildi} />
        }
      </div>
    );
  }
}