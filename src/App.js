import React,{Component} from 'react';
import './App.css';
import Ciseaux from './images/Ciseaux.svg';
import Pierre from './images/Pierre.svg';
import Papier from './images/Papier.svg';
import Logo from './images/logo.svg';
import CloseIcon from './images/Close.svg';
import RulesBlocImage from './images/image-rules.svg';

class App extends Component{
  state = {
    Score : 0,

    input: {
      Choice : "",
    },
    output: {
      Choice : "",
      image : "",
      className : ""
    },
    resultGame : "",
    buttonContent : "Play Again"
  }

  render(){
    const onClickInCloseButtonOrRulesButton = e => {
      let SectionRules = document.querySelector('.onClickOnRulesButton');
      let IndicationBloc = document.querySelector(".onClickOnRulesButton .IndicationBloc");
     
      if(SectionRules.classList.length>1){
        SectionRules.classList.remove("none")
        if(IndicationBloc.classList.length<2){
          IndicationBloc.classList.add("Animation1ForResumeBloc")
        }
        else{
          IndicationBloc.classList.replace("Animation2ForResumeBloc","Animation1ForResumeBloc")
        }
      }
      else{
        setTimeout(() => {
          SectionRules.classList.add("none")
        }, 650);
        IndicationBloc.classList.replace("Animation1ForResumeBloc","Animation2ForResumeBloc")
      }
    }
    const OnClickInPaperChoice = e => {
      this.setState({
        input : {choice : "paper"}
      });
      let random = Math.floor(Math.random() * Math.floor(3));
      if(random===0){
        this.setState({
          output : {choice : "rock", image : Pierre,className:"PierreButton"}
        });
      }
      if(random===1){
        this.setState({
          output : {choice : "paper", image : Papier,className:"PaperButton"}
        })
      }
      if(random===2){
        this.setState({
          output : {choice : "ciseaux", image : Ciseaux,className:"CiseauxButton"}
        })
      }

      let target = document.querySelector(".PaperButton");
      target.classList.add("targetChoised");
    
      let RockElement = document.querySelector(".PierreButton");
      RockElement.classList.add("DisparitionRock");

      let LineRockElement = document.querySelector(".LinePaperPierre");
      LineRockElement.classList.add("LinePaperPierreDisparitionAnimation")
    
      let ScisorsElement = document.querySelector(".CiseauxButton");
      ScisorsElement.classList.add("CiseauxButtonDisparitionAnimation")

      let LineScisorsPaperElement = document.querySelector(".LineCiseauxPaper")
      let LineScisorsRockElement = document.querySelector(".LinePierreCiseaux")

      LineScisorsRockElement.classList.add("LineScisorsPaperElementAnimation")
      LineScisorsPaperElement.classList.add("LineScisorsRockElementAnimation")
    
      let AllCommentaires = document.querySelector(".commentaire")
      setTimeout(() => {
        if(AllCommentaires){
          AllCommentaires.classList.replace("commentaire","commentaireAnimation")

        }
      }, 500);
      
      let ComputerChoice = document.querySelector(".ComputerChoice");
      ComputerChoice.classList.replace("NONE","ComputerChoiceAnimation");

      let ComputerChoiceText = document.querySelector(".ComputerChoice h2")
      setTimeout(() => {
        ComputerChoiceText.classList.add("ComputerChoiceTextAnimation")
      }, 1000);
      setTimeout(() => {
        ComputerChoice.classList.add("SeeResult");
        target.classList.add("SeeResult2")
      }, 2000);

      let ResultGame = document.querySelector("section .ResultGame .container");
      let ParentForResultGame = document.querySelector("section .ResultGame");
      setTimeout(() => {
        if(ResultGame){
          ResultGame.classList.remove("none")
        }
      }, 2500);

      if(ParentForResultGame){
        ParentForResultGame.classList.remove("NONE");
      }
      
      setTimeout(() => {
        console.log(this.state)
        if(random===0){
          this.setState({
            Score: this.state.Score+1,
            resultGame : "You win",
            buttonContent : "Continue"       
          })
          console.log(this.state + "jhahaha")
        }if(random===1){
          this.setState({
            buttonContent : "Continue",
            resultGame : "zero score"
          })
          console.log(this.state + "ahahahah")
        }if(random===2){
          let a;
          if(this.state.score>0){a=this.state.Score -1}else{a=0}
          this.setState({
            Score : a,
            resultGame: "You lose"
          })
          console.log(this.state + " hahaha")
        }
      }, 2500);
    }
    const OnClickInRockChoice = e => {
      this.setState({
        input : {choice : "rock"}
      });
      let random = Math.floor(Math.random() * Math.floor(3));
      if(random===0){
        this.setState({
          output : {choice : "rock", image : Pierre,className:"PierreButton"}
        });
      }
      if(random===1){
        this.setState({
          output : {choice : "paper", image : Papier,className:"PaperButton"}
        })
      }
      if(random===2){
        this.setState({
          output : {choice : "ciseaux", image : Ciseaux,className:"CiseauxButton"}
        })
      }
      let target = document.querySelector(".PierreButton");
      target.classList.add("RocktargetChoised");
    
      let PaperElement = document.querySelector(".PaperButton");
      PaperElement.classList.add("DisparitionRock");

      let LineRockElement = document.querySelector(".LinePaperPierre");
      LineRockElement.classList.add("LinePaperPierreDisparitionAnimation")
    
      let ScisorsElement = document.querySelector(".CiseauxButton");
      ScisorsElement.classList.add("CiseauxButtonDisparitionAnimation")

      let LineScisorsPaperElement = document.querySelector(".LineCiseauxPaper")
      let LineScisorsRockElement = document.querySelector(".LinePierreCiseaux")

      LineScisorsRockElement.classList.add("LineScisorsPaperElementAnimation")
      LineScisorsPaperElement.classList.add("LineScisorsRockElementAnimation")
    
      let AllCommentaires = document.querySelector(".RockCommentaire")
      setTimeout(() => {
        if(AllCommentaires){
          AllCommentaires.classList.replace("commentaire","commentaireAnimation")

        }
      }, 500);
      let ComputerChoice = document.querySelector(".ComputerChoice");
      ComputerChoice.classList.replace("NONE","ComputerChoiceAnimation");

      let ComputerChoiceText = document.querySelector(".ComputerChoice h2")
      setTimeout(() => {
        ComputerChoiceText.classList.add("ComputerChoiceTextAnimation")
      }, 1000);
      setTimeout(() => {
        ComputerChoice.classList.add("SeeResult");
        target.classList.add("SeeResult4")
      }, 2000);

      let ResultGame = document.querySelector("section .ResultGame .container");
      let ParentForResultGame = document.querySelector("section .ResultGame");
      setTimeout(() => {
        if(ResultGame){
          ResultGame.classList.remove("none")
        }
      }, 2500);
      if(ParentForResultGame){
        ParentForResultGame.classList.remove("NONE");
      }


      setTimeout(() => {
        if(random===0){
          this.setState({
            resultGame : "zero score",
            buttonContent : "Continue"     
          })
        }if(random===1){
          let a;
          if(this.state.Score>0){a=this.state.Score-1}else{a=0}
          this.setState({
            Score: a,
            resultGame : "You lose" 
            
          })
        }if(random===2){
          this.setState({
            Score : this.state.Score + 1,
            resultGame: "You win",
            buttonContent : "Continue"
          })
        }
      }, 2500);
    }
    const OnClickInScisorsChoice = e => {
      this.setState({
        input : {choice : "ciseaux"}
      });
      let random = Math.floor(Math.random() * Math.floor(3));
      if(random===0){
        this.setState({
          output : {choice : "rock", image : Pierre,className:"PierreButton"}
        });
      }
      if(random===1){
        this.setState({
          output : {choice : "paper", image : Papier,className:"PaperButton"}
        })
      }
      if(random===2){
        this.setState({
          output : {choice : "ciseaux", image : Ciseaux,className:"CiseauxButton"}
        })
      }
      let target = document.querySelector(".CiseauxButton");
      target.classList.add("CiseauxtargetChoised");
    
      let PaperElement = document.querySelector(".PaperButton");
      PaperElement.classList.add("DisparitionRock");

      let LineRockElement = document.querySelector(".LinePaperPierre");
      LineRockElement.classList.add("LinePaperPierreDisparitionAnimation")
    
      let ScisorsElement = document.querySelector(".PierreButton");
      ScisorsElement.classList.add("CiseauxButtonDisparitionAnimation")

      let LineScisorsPaperElement = document.querySelector(".LineCiseauxPaper")
      let LineScisorsRockElement = document.querySelector(".LinePierreCiseaux")

      LineScisorsRockElement.classList.add("LineScisorsPaperElementAnimation")
      LineScisorsPaperElement.classList.add("LineScisorsRockElementAnimation")
    
      let AllCommentaires = document.querySelector(".CiseauxCommentaire")
      setTimeout(() => {
        if(AllCommentaires){
          AllCommentaires.classList.replace("commentaire","commentaireAnimation")

        }
      }, 500);
      let ComputerChoice = document.querySelector(".ComputerChoice");
      ComputerChoice.classList.replace("NONE","ComputerChoiceAnimation");

      let ComputerChoiceText = document.querySelector(".ComputerChoice h2")
      setTimeout(() => {
        ComputerChoiceText.classList.add("ComputerChoiceTextAnimation")
      }, 1000);
      setTimeout(() => {
        ComputerChoice.classList.add("SeeResult");
        target.classList.add("SeeResult3")
      }, 2000);

      let ResultGame = document.querySelector("section .ResultGame .container");
      let ParentForResultGame = document.querySelector("section .ResultGame");
      setTimeout(() => {
        if(ResultGame){
          ResultGame.classList.remove("none")
        }
      }, 2500);
      if(ParentForResultGame){
        ParentForResultGame.classList.remove("NONE");
      }

      setTimeout(() => {
        if(random===0){
          let a;
          if(this.state.Score>0){a=this.state.Score-1}else{a=0}
          this.setState({
            resultGame : "you lose",
            Score : a     
          })
        }if(random===1){
          this.setState({
            Score: this.state.Score+1,
            resultGame : "you win",
            buttonContent : "Continue"  
            
          })
        }if(random===2){
          this.setState({
            buttonContent : "Continue",
            resultGame: "zero score"
          })
        }
      }, 2500);
    }
    const OnClickInTryAgainButton = e => {
      let PaperButton = document.querySelector(".PaperButton");
      let RockButton = document.querySelector(".PierreButton");
      let TextInRockButton = document.querySelector(".PierreButton h2");
      let TextInCiseauxButton = document.querySelector(".CiseauxButton  h2");
      let TextInPaperCommentaire = document.querySelector(".PaperCommentaire")
      let ScisorsButton = document.querySelector(".CiseauxButton");

      let LinePaperPierre = document.querySelector(".LinePaperPierre");
      let LinePierreCiseaux = document.querySelector(".LinePierreCiseaux");
      let LineCiseauxPaper = document.querySelector(".LineCiseauxPaper");

      let ResultGame = document.querySelector(".ResultGame");
      let ContainerOfResultGame = document.querySelector(".ResultGame .container")
      let computerButton = document.querySelector(".ComputerChoice");

      let AnimationText = document.querySelector(".ComputerChoiceTextAnimation");

      ResultGame.classList.add("NONE");
      computerButton.classList.remove("ComputerChoiceAnimation","SeeResult")
      computerButton.classList.add("NONE");
      ContainerOfResultGame.classList.add("none")
      
      PaperButton.classList.remove("targetChoised","SeeResult2","DisparitionRock")
      RockButton.classList.remove("RocktargetChoised","CiseauxButtonDisparitionAnimation","SeeResult4","DisparitionRock")
      TextInRockButton.classList.replace("commentaireAnimation","commentaire")
      TextInPaperCommentaire.classList.replace("commentaireAnimation","commentaire")
      TextInCiseauxButton.classList.replace("commentaireAnimation","commentaire")
      ScisorsButton.classList.remove("CiseauxtargetChoised","SeeResult3","CiseauxButtonDisparitionAnimation")
      
      LinePierreCiseaux.classList.remove("LineScisorsPaperElementAnimation")
      LineCiseauxPaper.classList.remove("LineScisorsRockElementAnimation")
      LinePaperPierre.classList.remove("LinePaperPierreDisparitionAnimation")
    
      AnimationText.classList.remove("ComputerChoiceTextAnimation")

      this.setState({
        output:{choice:"",image:"",className:""},
        resultGame:"",
        buttonContent:"Play Again"
      })
    }

    return(
      <>
        <header className = "Header">
          <h2 className = "HeaderTitle"><img src = {Logo} alt = "illustration du logo de l'entreprise qui prend"/></h2>
          <div className = "ScoreBlock">
            <p>SCORE</p>
            <h1>{this.state.Score}</h1>
          </div>
        </header>
        <section className = "GuemplaySection">
          <div className = "TheButtons">
            <div onClick = {OnClickInPaperChoice} className = "PaperButton"><div className = "circleProp"><img src = {Papier} alt = "un papier"/></div>
              <h2 className = "PaperCommentaire commentaire">YOU PICKED</h2>
            </div>
           
            <div className = "LinePaperPierre"></div>
           
            <div onClick = {OnClickInRockChoice} className = "PierreButton"><div className = "circleProp"><img src = {Pierre} alt = "une pierre"/></div>
              <h2 className = "RockCommentaire commentaire">You picked</h2>
            </div>
           
            <div className = "LinePierreCiseaux"></div>
           
            <div onClick = {OnClickInScisorsChoice} className = "CiseauxButton"><div className = "circleProp"><img src = {Ciseaux} alt = "un ciseaux"/></div>
              <h2 className = "CiseauxCommentaire commentaire">You picked</h2>
            </div>
           
            <div className = "LineCiseauxPaper"></div>
            <div className = "ComputerChoice NONE">
              <div className = {`computerButton ${this.state.output.className} disable`}>
              <h2 className = "">THE HOUSE PICKED</h2>
                <div className = "circleProp">
                  <img src = {this.state.output.image} />
                </div>
              </div>
            </div>
            <div className = "ResultGame NONE">
              <div className = "container none">
                <h2 className = "ResultGameOnText" >{this.state.resultGame}</h2>
                <button onClick = {OnClickInTryAgainButton} className = "AgainButton">{this.state.buttonContent}</button>
              </div>
            </div>
          </div>

        </section>
        <section className = "onClickOnRulesButton none">
          <div className = "IndicationBloc">
            <div className = "HeadPart">
              <h2>RULES</h2>
              <div onClick = {onClickInCloseButtonOrRulesButton} className = "Close">
                <img src = {CloseIcon} alt = "Logo de fermeture du bloc"/>
              </div>
            </div>
            <img src = {RulesBlocImage} alt = "Illustrant les régle du jeux"/>
          </div>
        </section>
        <footer>
          <button onClick = {onClickInCloseButtonOrRulesButton} className = "RulesButton btn">RULES</button>
        </footer>
      </>
    )
  }
}

export default App