import { Component, OnInit, HostListener, ViewChild, OnDestroy, EventEmitter, ViewEncapsulation } from '@angular/core';
import { ApplicationmodelService } from '../model/applicationmodel.service';
import { Subject, Observable, Subscription } from 'rxjs'
import 'jquery';


declare var $: any;

@Component({
  selector: 'Ntemplate22',
  templateUrl: '../view/layout/Ntemplate22.component.html',
  styleUrls: ['../view/css/Ntemplate22.component.css', '../view/css/bootstrap.min.css'],
  encapsulation: ViewEncapsulation.None
})

export class Ntemplate22 implements OnInit {
  private appModel: ApplicationmodelService;

  constructor(appModel: ApplicationmodelService) {
    this.appModel = appModel;
    this.assetsPath = this.appModel.assetsfolderpath;
    this.appModel.navShow = 2;
    this.appModel.setLoader(true);
    // if error occured during image loading loader wil stop after 5 seconds 
    this.loaderTimer = setTimeout(() => {
      this.appModel.setLoader(false);
      this.checkforQVO();
    }, 5000);

    //this.rightFeedbackVO.nativeElement.currentTime = 0;
    //this.rightFeedbackVO.nativeElement.src = "";
    //this.wrongFeedbackVO.nativeElement.src = "";
   // this.wrongFeedbackVO.nativeElement.pause();
    //this.wrongFeedbackVO.nativeElement.currentTime = 0;
  }

  @ViewChild("optionsBlock") optionsBlock: any;
  @ViewChild('narrator') narrator: any;
  @ViewChild('instruction') instruction: any;
  @ViewChild('optionAudio') optionAudio: any;
  @ViewChild('maincontent') maincontent: any;
  @ViewChild('confirmModalRef') confirmModalRef: any;
  @ViewChild('popupRef') popupRef: any;
  @ViewChild('RightModal') RightModalRef: any;
  @ViewChild('WrongModal') WrongModalRef: any;  
  @ViewChild('popupImage') popupImage: any;
  @ViewChild('rightFeedbackVO') rightFeedbackVO: any
  @ViewChild('wrongFeedbackVO') wrongFeedbackVO: any;
  @ViewChild('quesRef') QuesRef: any;
  @ViewChild('hoverquesRef') hoverQuesRef: any;
  @ViewChild('clickquesRef') clickQuesRef: any;
  @ViewChild('playerAudio') myAudio: any;
  @ViewChild('answerModalRef') answerModalRef: any;
  @ViewChild('QuestionAudio') questionAudio: any;
  @ViewChild('mytooltip') Tooltip: any;
  @ViewChild('myLine') Line: any;
  @ViewChild('stateId') StateId: any;
  @ViewChild('confirmSubmitRef') confirmSubmitRef: any;
  @ViewChild('mySelect') MySelect: any;
  @ViewChild('MyForm') MyFormVar: any;
  @ViewChild('imgRef') imgRef: any;
  @ViewChild('feedbackPopupAudio') feedbackPopupAudio: any;
  @ViewChild('showAnswerRef') showAnswerRef: any;
  @ViewChild('feedbackshowPopupAudio') feedbackshowPopupAudio: any;
  @ViewChild('infoModalRef') infoModalRef: any;
  @ViewChild('feedbackInfoAudio') feedbackInfoAudio: any;
  @ViewChild('monthDates') monthDates: any;
  @ViewChild('monthDatesinPopup') monthDatesinPopup: any;
  
  
  
  
  

 
  


  audio = new Audio();
  blink: boolean = false;
  currentIdx = 0;
  commonAssets: any = "";
  optionslist: any = [];
  optionslist_main: any = "";
  myoption: any = [];
  question: any = "";
  feedback: any = "";
  narratorAudio: any;
  isLastActivity: any = "";
  checked: boolean = false;
  selected: boolean = false;
  bool: boolean = false;
  showIntroScreen: boolean;

  helpAudio: any = "";
  correctOpt: any;
  idArray: any = [];
  isFirstQues: boolean;
  isLastQues: boolean = false;
  isAutoplayOn: boolean;
  isLastQuesAct: boolean;

  noOfImgs: number;
  noOfImgsLoaded: number = 0;
  loaderTimer: any;
  disableHelpBtn: boolean = false;
  containgFolderPath: string = "";
  assetsPath: string = "";
  loadFlag: boolean = false;
  optionObj: any;
  optArr1: any;
  optArr2: any;
  optionCommonAssets: any;
  ques_control: any;
  feedbackObj: any;
  popupAssets: any;
  confirmPopupAssets: any;
  noOfRightAns: any;
  rightAnspopupAssets: any;
  tempSubscription: Subscription;
  rightanspopUp: any;
  wronganspopUp: any;
  quesObj:any;
  fileUrls:string ="";
  mainSvgfile: any = "";
  initColorCircle:string = "";
  initColorRectangle:string = "";
  stateCounter:number = 0;
  maharashtraCounter:number = 0;
  Id:any;
  
  Jammu:any;
  Rajasthan:any;
  Maharashtra:any;
  MadhyaPradesh:any;
  
  Index_1:any;
  Index_2:any;
  
  storeHtml:any;
  storeEvent:any;
  elseCounter:any;
  currentState:any;
  
  triangle:any;
  mainShape:any;
  

  
  i:number = 0;
  j:number = 0;
  noOfSVG:number;
  edited = false;
  clickEv = false;
  answer:any;
  stateValue:any = [];
  submitFlag = true;
  checkCounter:number = 0;
  quesAudio:any;
  CorrectAudio:any;
  WrongAudio:any;
  partiallyCorrectAudio:any;
  mouseOutFlag = true;
  selectedOutlineCounter:number = 0;
  onClickFlag = false;
  overState = true;
  storeState:any = [];
  _i:any;
  myDropDownStates:any = [];
  rightAnswer:any = [];
  myRightAnswer:any = [];
  Submitcounter:number = 0;
  selectedFillPart:any = [];
  rightAnswerCounter:number = 0;
  redColorArray:any = [];
  greenColorArray:any = [];
  wrongAnswerCounter:number = 0;
  greenColorCounter:number = 0;
  RightSubmit:any = [];
  textFeildValue:any = [];
  redGreenFlag:boolean;
  accessLine:any;
  dAttr:any;
  lineColor:any;
  confirmSubmitAssets: any;
  infoPopupAssets: any;
  showAnswerCounter:number = 0;
  autoTimer:boolean = true;
  autoShowAnswerCounter:number = 1;
  groupArray:any = [];
  duplicateGroupArray:any = [];
  isValid = false;
  partiallyCorrectFlag:boolean = false;
  currentindex:number = 0;
  currentIndexofrightAnswer:number = 0;
  flag: boolean = false;
  clickedId:string;
  stateIndex:number;
  options:any=[];
  config: any ={};
  coloronHover: string;
  originalcolor: string;
  submittedArray: any =[];
  tempObj = <any>{};
  p: number = 1;
  paginationArray: any = [];
  countofClick: number = 0;
  tableofOne: boolean;
  tableofTwo: boolean;
  tableofThree: boolean;
  showtableofOne: boolean;
  showtableofTwo: boolean;
  showtableofThree: boolean;
  table1:any;
  table2:any;
  table3:any;
  selectedStateinTooltip:any;
  rightstateCounter:number =0;
  rightcapitalCounter: number = 0;
  wrongstateCounter:number =0;
  wrongcapitalCounter:number =0;
  showAnswerarray:any=[];
  copiedstates:any=[];
  attemptType: string = "";
  optionSelected:any;


  monthsArr:any=[];
  ArrweekDays:any=[];
  Arryears:any=[];
  startIndex:number;
  datesArr:any=[];
  date:any;
  clickedID:any;
  previousItemevent: any;
  isCorrectMonth:boolean=true;
  isCorrectYear:boolean =true;
  isCorrectDate:boolean = true;
  isCorrectweekDay:boolean = true;
  yearSelected:boolean = false;
  monthSelected:boolean = false;
  dateSelected:boolean = false;
  weekDaySelected:boolean = false;
  monthfromLocalMachine:boolean=true;
  

  


  playHoverInstruction() {
   if (!this.narrator.nativeElement.paused) {
      console.log("narrator/instruction voice still playing");
    } else {
      console.log("play on Instruction");
      this.instruction.nativeElement.load();
      if (this.instruction.nativeElement.paused) {
        this.instruction.nativeElement.currentTime = 0;
        this.instruction.nativeElement.play();
        //this.QuesRef.nativeElement.style.pointerEvents = "none";
        $(".instructionBase img").css("cursor", "pointer");
        this.instruction.nativeElement.onended = () => {
          //this.QuesRef.nativeElement.style.pointerEvents = "";
        }
      }
      
  }
  // this.questionAudio.nativeElement.src = this.quesAudio.location=="content" ? this.containgFolderPath +"/"+ this.quesAudio.url : this.assetsPath +"/"+ this.quesAudio.url;
  //  this.questionAudio.nativeElement.load();
  //  this.questionAudio.nativeElement.play();
  }

  optionHover(opt, i, j) {
   // $(this.optionsBlock.nativeElement.children[i].children[j]).addClass("scaleInAnimation");
  }

  onHoverOption(opt, i, j) {
    if (opt && opt != undefined) {
      if (this.narrator.nativeElement.paused) {
        $(this.optionsBlock.nativeElement.children[i].children[j]).addClass("scaleInAnimation");
      }
    }
  }

  playHoverOption(opt, i, j) {
    if (this.optionsBlock.nativeElement.children[i].children[j].children[1].paused && this.narrator.nativeElement.paused) {
      if (opt.imgsrc_audio && opt.imgsrc_audio.location == "content") {
        this.optionsBlock.nativeElement.children[i].children[j].children[1].src = this.containgFolderPath + "/" + opt.imgsrc_audio.url;
      } else {
        this.optionsBlock.nativeElement.children[i].children[j].children[1].src = this.assetsPath + "/" + opt.imgsrc_audio.url;
      }
      this.optionsBlock.nativeElement.children[i].children[j].children[1].load();
      if (!this.instruction.nativeElement.paused) {
       // this.instruction.nativeElement.pause();
      }
      this.optionsBlock.nativeElement.children[i].children[j].children[1].play();
      if (i == 0) {
        this.optionsBlock.nativeElement.children[1].style.pointerEvents = "none";
      } else {
        this.optionsBlock.nativeElement.children[0].style.pointerEvents = "none";
      }
      for (let x = 0; x < this.optionsBlock.nativeElement.children[i].children.length; x++) {
        if (x != j) {
          this.optionsBlock.nativeElement.children[i].children[x].style.pointerEvents = "none";
        }
      }
      //this.optionsBlock.nativeElement.classList = "row mx-0 disable_div";
      this.optionsBlock.nativeElement.children[i].children[j].children[1].onended = () => {
        if (i == 0) {
          this.optionsBlock.nativeElement.children[1].style.pointerEvents = "";
        } else {
          this.optionsBlock.nativeElement.children[0].style.pointerEvents = "";
        }
        for (let x = 0; x < this.optionsBlock.nativeElement.children[i].children.length; x++) {
          if (x != j) {
            this.optionsBlock.nativeElement.children[i].children[x].style.pointerEvents = "";
          }
        }
      } 
      this.onHoverOption(opt, i, j);
    }
  }
  onHoverOptionOut(opt, i, j) {
    if (opt && opt != undefined) {
      this.OptionZoomOutAnimation(opt, i, j);
    }
  }

  ngAfterViewChecked() {
    this.templatevolume(this.appModel.volumeValue, this);
  }

  OptionZoomOutAnimation(opt, i, j) {
    if (!this.checked && this.narrator.nativeElement.paused) {
      $(this.optionsBlock.nativeElement.children[i].children[j]).addClass("scaleOutAnimation");
      setTimeout(() => {
        $(this.optionsBlock.nativeElement.children[i].children[j]).removeClass("scaleInAnimation");
        $(this.optionsBlock.nativeElement.children[i].children[j]).removeClass("scaleOutAnimation");
      }, 500);
    }
  }
  checkAnswer(opt, i, j) {
    if (!this.narrator.nativeElement.paused! || !this.instruction.nativeElement.paused) {
      console.log("narrator/instruction voice still playing");
    } else {
      this.optionsBlock.nativeElement.className += " disable_div";
      if (opt.id == this.feedback.correct_ans_index) {
        this.checked = true;
        this.selected = true;
        //this.optionsBlock.nativeElement.children[i].children[j].children[1].children[2].style.display = "block";
        this.optionsBlock.nativeElement.className += " disable_div";
        $("#instructionBar").addClass("disable_div");
        //console.log(this.popupImage);
        if (opt.imgsrc && opt.imgsrc.location == "content") {
          this.popupImage.nativeElement.src = this.containgFolderPath + "/" + opt.imgsrc.url;
        } else {
          this.popupImage.nativeElement.src = this.assetsPath + "/" + opt.imgsrc.url;
        }
        this.rightanspopUp=setTimeout(() => {
          //this.popupRef.nativeElement.classList = "displayPopup modal";
          //this.optionsBlock.nativeElement.style = "opacity:0.3";
          $("#optionsBlock .options").css("opacity", "0.3");
          $("#instructionBar").css("opacity", "0.3");
            this.rightFeedbackVO.nativeElement.play();
          
        }, 700);
        this.rightFeedbackVO.nativeElement.onended = () => {
          setTimeout(() => {
            this.closeModal();
          },2000);
        }
        
      } else {
        this.checked = true;
        this.selected = false;
        //this.optionsBlock.nativeElement.children[i].children[j].children[1].children[3].style.display = "block";
        this.optionsBlock.nativeElement.children[i].children[j].className += " disable_div";
        $("#instructionBar").addClass("disable_div");
        if (opt.imgsrc && opt.imgsrc.location == "content") {
          this.popupImage.nativeElement.src = this.containgFolderPath + "/" + opt.imgsrc.url;
        } else {
          this.popupImage.nativeElement.src = this.assetsPath + "/" + opt.imgsrc.url;
        }
        this.wronganspopUp=setTimeout(() => {
          //this.appModel.openModal("success-modal-id", this.popupAssets,'');
          //this.popupRef.nativeElement.classList = "displayPopup modal";
          
          this.optionsBlock.nativeElement.classList.value = "row mx-0";
          this.optionsBlock.nativeElement.children[i].children[j].style = "opacity:0.3";
          this.wrongFeedbackVO.nativeElement.play();
        },700);
        
        this.checked = false;
        this.wrongFeedbackVO.nativeElement.onended = () => {
          setTimeout(() => {
            this.closeModal();
            $("#optionsBlock .options").removeClass("disable_div");
            $("#optionsBlock .options").css("opacity", "unset");
          }, 2000);        
        }
      }
      this.optionsBlock.nativeElement.children[i].children[j].style.transform = "none";
    }
  }
  blinkOnLastQues() {
    if (this.appModel.isLastSectionInCollection) {
      this.appModel.blinkForLastQues(this.attemptType);
      this.appModel.stopAllTimer();
      if (!this.appModel.eventDone) {
        if (this.isLastQuesAct) {
          this.appModel.eventFired();
          this.appModel.event = { 'action': 'segmentEnds' };
        }
        if (this.isLastQues) {
          this.appModel.event = { 'action': 'exit' };
        }
      }
    } else {
      this.appModel.moveNextQues(this.attemptType);
    }
  }
  
onSubmit()
{
	
	if(!this.submitFlag)
	{
		//alert("enter in submit");
    //this.questionAudio.nativeElement.pause();
    if(this.paginationArray.length < this.commonAssets.itemsperPage) {
      this.tableofOne = true;
      this.tableofTwo = false;
      this.tableofThree = false;
    } else if(this.commonAssets.itemsperPage < this.paginationArray.length && this.paginationArray.length < (this.commonAssets.itemsperPage+this.commonAssets.itemsperPage)) {
      this.tableofOne = false;
      this.tableofTwo =true;
      this.tableofThree = false;
      this.table1= this.paginationArray.slice(0,this.commonAssets.itemsperPage);
      this.table2=this.paginationArray.slice(this.commonAssets.itemsperPage,this.commonAssets.itemsperPage*2);
      //this.table3 = this.paginationArray.slice(this.commonAssets.itemsperPage*2,this.commonAssets.itemsperPage*3);
    } else {
      this.tableofOne = false;
      this.tableofTwo = false;
      this.tableofThree =true;
      this.table1= this.paginationArray.slice(0,this.commonAssets.itemsperPage);
      this.table2=this.paginationArray.slice(this.commonAssets.itemsperPage,this.commonAssets.itemsperPage*2);
      this.table3 = this.paginationArray.slice(this.commonAssets.itemsperPage*2,this.commonAssets.itemsperPage*3);
    }                    						 
	}	
}  

  
  
  ngOnInit() {
	  this.groupArray = [];
    this.duplicateGroupArray = [];
	  //this.QuesRef.nativeElement.style.opacity = 0;
    this.setData();
    if (this.appModel.isNewCollection) {
      this.appModel.event = { 'action': 'segmentBegins' };
    }
    this.containgFolderPath = this.getBasePath();
    if (this.rightFeedbackVO != undefined || this.wrongFeedbackVO != undefined) {
      this.rightFeedbackVO.nativeElement.pause();
      this.rightFeedbackVO.nativeElement.currentTime = 0;
      this.rightFeedbackVO.nativeElement.src = "";
      this.wrongFeedbackVO.nativeElement.src = "";
      this.wrongFeedbackVO.nativeElement.pause();
      this.wrongFeedbackVO.nativeElement.currentTime = 0;
    }
    
    //this.setData();
    this.tempSubscription = this.appModel.getNotification().subscribe(mode => {
      if (mode == "manual") {
        //show modal for manual
        this.appModel.notifyUserAction();
        if (this.popupRef && this.popupRef.nativeElement) {
          $("#instructionBar").addClass("disable_div");
         // this.popupRef.nativeElement.classList = "displayPopup modal";
		 console.log("No-1");
          
          //this.setFeedbackAudio();
        }
      } else if (mode == "auto") {
        this.checked = true;
        //show modal of auto
        this.appModel.notifyUserAction();
        if (this.popupRef && this.popupRef.nativeElement) {
          $("#instructionBar").addClass("disable_div");
          //this.popupRef.nativeElement.classList = "displayPopup modal";
		  console.log("No-2");
      this.showAnswerFeedback();
      this.showAnswerRef.nativeElement.classList="displayPopup modal";
		  //this.grayOverTimer();
		  //this.showAnswer();		 
      this.feedbackshowPopupAudio.nativeElement.src=this.commonAssets.showAnsAudio.location=="content" ? this.containgFolderPath +"/"+ this.commonAssets.showAnsAudio.url : this.assetsPath +"/"+ this.commonAssets.showAnsAudio.url;
      this.feedbackshowPopupAudio.nativeElement.load();
      this.feedbackshowPopupAudio.nativeElement.play();
      this.feedbackshowPopupAudio.nativeElement.onended = () => {
        this.closeModal();
        
      }
          $("#optionsBlock").css("opacity", "0.3");
          $("#instructionBar").css("opacity", "0.3");
          this.appModel.handlePostVOActivity(true);
          this.optionsBlock.nativeElement.classList = "row mx-0 disable_div";
          $("#instructionBar").addClass("disable_div");
        }
      }
    })

    this.appModel.getConfirmationPopup().subscribe((val) => {
            if (val == "uttarDikhayein") {
                if (this.confirmModalRef && this.confirmModalRef.nativeElement) {
                    this.confirmModalRef.nativeElement.classList = "displayPopup modal";
                    this.appModel.notifyUserAction();
                }
            } else if (val == "submitAnswer") {
                if (this.confirmSubmitRef && this.confirmSubmitRef.nativeElement) {
                    this.confirmSubmitRef.nativeElement.classList = "displayPopup modal";
                    this.appModel.notifyUserAction();
                }
            }
        })

    this.appModel.questionEvent.subscribe(() => {
      if (this.rightanspopUp) {
        console.log("timer still exist");
        clearTimeout(this.rightanspopUp);
      }
      if (this.wronganspopUp) {
        clearTimeout(this.wronganspopUp);
      }
    });

    this.appModel.nextBtnEvent().subscribe(() =>{
			if(this.appModel.isLastSectionInCollection){
				this.appModel.event = {'action': 'segmentEnds'};	
			}
			if(this.appModel.isLastSection){
					this.appModel.event = {'action': 'exit'};
				}
    });
    
    this.appModel.postWrongAttempt.subscribe(() => {
      this.postWrongAttemplt();
    });
  }

  postWrongAttemplt() {
    
  }




  templatevolume(vol,obj) {
    if(obj.narrator && obj.narrator.nativeElement){
        obj.narrator.nativeElement.volume = obj.appModel.isMute?0:vol;
    }
    if (obj.optionAudio && obj.optionAudio.nativeElement) {
      obj.optionAudio.nativeElement.volume = obj.appModel.isMute ? 0 : vol;
    }
    if (obj.rightFeedbackVO && obj.rightFeedbackVO.nativeElement) {
      obj.rightFeedbackVO.nativeElement.volume = obj.appModel.isMute ? 0 : vol;
    }
    if (obj.wrongFeedbackVO && obj.wrongFeedbackVO.nativeElement) {
      obj.wrongFeedbackVO.nativeElement.volume = obj.appModel.isMute ? 0 : vol;
    }
    if (obj.instruction && obj.instruction.nativeElement) {
      obj.instruction.nativeElement.volume = obj.appModel.isMute ? 0 : vol;
    }
 }

  checkImgLoaded() {
    if (!this.loadFlag) {
      this.noOfImgsLoaded++;
      if (this.noOfImgsLoaded >= this.noOfImgs) {
        this.appModel.setLoader(false);
        this.loadFlag = true;
        clearTimeout(this.loaderTimer);
        this.checkforQVO();
      }
    }
  }

  checkforQVO(){
    if (this.quesObj && this.quesObj.quesInstruction && this.quesObj.quesInstruction.url && this.quesObj.quesInstruction.autoPlay) {
			this.narrator.nativeElement.src = this.quesObj.quesInstruction.location=="content" ? this.containgFolderPath+ "/" + this.quesObj.quesInstruction.url+"?someRandomSeed="+ Math.random().toString(36):this.assetsPath + "/" + this.quesObj.quesInstruction.url+"?someRandomSeed="+ Math.random().toString(36);
      //this.appModel.handlePostVOActivity(true);
      let instruction: HTMLElement = document.getElementsByClassName("instructionBase")[0] as HTMLElement;
      instruction.style.pointerEvents="none"
			this.optionsBlock.nativeElement.classList = "row mx-0 disable_div";
			this.narrator.nativeElement.play();
			this.narrator.nativeElement.onended = () => {
              this.appModel.handlePostVOActivity(false);
              instruction.style.pointerEvents="";
              this.optionsBlock.nativeElement.classList = "row mx-0";
			}
		} else {
			this.appModel.handlePostVOActivity(false);
		}
  }

  hoveronMonth(item) {
    //console.log(item);
    this.appModel.notifyUserAction();
    if (!this.instruction.nativeElement.paused) {
      this.instruction.nativeElement.currentTime=0;
      this.instruction.nativeElement.pause();
    }
    item.monthImg = item.hovermonthImg;
  }

  houtonMonth(item) {
    item.monthImg = item.monthOriginalImg;
  }

  hoveronYear(item) {
    //if(!item.selected) {
      this.appModel.notifyUserAction();
      if (!this.instruction.nativeElement.paused) {
        this.instruction.nativeElement.currentTime=0;
        this.instruction.nativeElement.pause();
      }
      item.yearsImg = item.hoveryearsImg;
    //}
  }

  houtonYear(item) {
    //if(!item.selected) {
      item.yearsImg = item.yearsOriginalImg;
   // }
  }

  hoveronWeekDays(item) {
    this.appModel.notifyUserAction();
    if (!this.instruction.nativeElement.paused) {
      this.instruction.nativeElement.currentTime=0;
      this.instruction.nativeElement.pause();
    }
    item.weekDayImg = item.hoverweekDayImg;
  }

  houtonWeekDays(item) {
    item.weekDayImg = item.weekDayOriginalImg;
  }

  hoveronDate(ev) {
    if(ev != undefined) {
      this.appModel.notifyUserAction();
      if (!this.instruction.nativeElement.paused) {
        this.instruction.nativeElement.currentTime=0;
        this.instruction.nativeElement.pause();
      }
      if(!this.datesArr[ev.target.id].selected) {
      ev.target.src = this.datesArr[ev.target.id].hoverdateImg.location=="content" ? this.containgFolderPath +"/"+ this.datesArr[ev.target.id].hoverdateImg.url : this.assetsPath +"/"+ this.datesArr[ev.target.id].hoverdateImg.url;
      }
    }
  }

  houtonDate(ev) {
    if(ev != undefined) {
      this.appModel.notifyUserAction();
      if(!this.datesArr[ev.target.id].selected) {
      ev.target.src = this.datesArr[ev.target.id].dateOriginalImg.location=="content" ? this.containgFolderPath +"/"+ this.datesArr[ev.target.id].dateOriginalImg.url : this.assetsPath +"/"+ this.datesArr[ev.target.id].dateOriginalImg.url;
      }
    }
  }
  
  setDatefromJSON() {
    if(this.quesObj.localMachineDate) {
       this.date= new Date();
      //this.monthsArr[date.getMonth()].selected = true;
      //this.datesArr.find((item) => item.id == date.getDate()).selected = true;
      this.setCalender('');
    }
  }

  onClickCalender(item,flag) {
    console.log(this.date);
    this.appModel.notifyUserAction();
    if(flag == "month" && !item.selected) {
      this.monthfromLocalMachine = false;
      this.monthSelected = true;
      this.dateSelected=false;
      this.previousItemevent=undefined;
      for(let i=this.startIndex;i>=0;i--) {
        this.monthDates.nativeElement.children[0].children[i].src="";
      }
      if(this.monthsArr.filter((item) => item.selected == true)[0] !=undefined) {
        this.monthsArr.filter((item) => item.selected == true)[0].selected = false;
      }
      if(this.monthsArr.filter((item) => item.checkRightorWrong == true)[0]!=undefined) {
        this.monthsArr.filter((item) => item.checkRightorWrong == true)[0].checkRightorWrong = false;
      }
      let indexofMonth =this.monthsArr.findIndex((index) =>index.id==item.id);
      this.date.setMonth(indexofMonth);
      item.selected = true;
      this.setCalender('');
      if(this.feedbackObj.correct_month!= "" && item.id == this.feedbackObj.correct_month) {
        this.isCorrectMonth = true;
        item.checkRightorWrong = true;
        item.ImginpopUp = item.rightmonthImg;
      } else {
        this.isCorrectMonth = false;
        item.checkRightorWrong = true;
        item.ImginpopUp = item.wrongmonthImg;
      }
    } else if(flag =="year" && !item.selected) {
      this.yearSelected = true;
      this.dateSelected=false;
      this.previousItemevent=undefined;
      for(let i=this.startIndex;i>=0;i--) {
        this.monthDates.nativeElement.children[0].children[i].src="";
      }
      if(this.Arryears.filter((item) => item.selected == true)[0] !=undefined) {
        this.Arryears.filter((item) => item.selected == true)[0].selected = false;
      }
      //let indexofYear =this.Arryears.findIndex((index) =>index.id==item.id);
      this.date.setFullYear(item.id);
      item.selected = true;
      this.setCalender('');
      if(this.feedbackObj.correct_year!= "" && item.id == this.feedbackObj.correct_year) {
        this.isCorrectYear = true;
      } else {
        this.isCorrectYear = false;
      }
    } else if(flag =="date") {
       this.dateSelected = true;
        this.clickedID = Number(item.target.id)+1;
       let itemDate = this.datesArr.find((index) => index.id == this.clickedID);
       if(this.datesArr.filter((item) => item.selected == true)[0] !=undefined) {
        let previousItem=this.datesArr.filter((item) => item.selected == true)[0];
        previousItem.selected = false;
        if(this.previousItemevent!=undefined) {
          this.previousItemevent.src = previousItem.dateImg.location=="content" ? this.containgFolderPath +"/"+ previousItem.dateImg.url : this.assetsPath +"/"+ previousItem.dateImg.url;
        }
        //previousItem.dateImg = previousItem.dateOriginalImg;
      }
      //itemDate.dateImg = itemDate.selecteddateImg;
      item.target.src = itemDate.selecteddateImg.location=="content" ? this.containgFolderPath +"/"+ itemDate.selecteddateImg.url : this.assetsPath +"/"+ itemDate.selecteddateImg.url;
      this.previousItemevent = item.target;
      itemDate.selected = true;
       if(this.feedbackObj.correct_date!= "" && this.clickedID == this.feedbackObj.correct_date) {
         this.isCorrectDate = true;
         //this.monthDatesinPopup.nativeElement.children[0].children[item.target.getAttribute("id")].src = itemDate.rightdateImg.location=="content" ? this.containgFolderPath +"/"+ itemDate.rightdateImg.url : this.assetsPath +"/"+ itemDate.rightdateImg.url;
       } else {
         this.isCorrectDate = false;
         //this.monthDatesinPopup.nativeElement.children[0].children[item.target.getAttribute("id")].src = itemDate.wrongdateImg.location=="content" ? this.containgFolderPath +"/"+ itemDate.wrongdateImg.url : this.assetsPath +"/"+ itemDate.wrongdateImg.url;
       }
    } else if(flag == "weekDays") {
      this.weekDaySelected = true;
      //this.dateSelected=false;
      if(this.ArrweekDays.filter((item) => item.selected == true)[0] !=undefined) {
        this.ArrweekDays.filter((item) => item.selected == true)[0].selected = false;
      }
      if(this.ArrweekDays.filter((item) => item.checkRightorWrong == true)[0]!=undefined) {
        this.ArrweekDays.filter((item) => item.checkRightorWrong == true)[0].checkRightorWrong = false;
      }
      item.selected = true;
      if(this.feedbackObj.correct_weekDay!= "" && item.id == this.feedbackObj.correct_weekDay) {
        this.isCorrectweekDay = true;
        item.checkRightorWrong = true;
        item.weekDayImginpopUp = item.rightweekDayImg;
      } else {
        this.isCorrectweekDay = false;
        item.checkRightorWrong = true;
        item.weekDayImginpopUp = item.wrongweekDayImg;
      }
    }
    if(this.monthSelected && this.yearSelected && this.dateSelected) {
      this.appModel.enableSubmitBtn(true);
    } else {
      this.appModel.enableSubmitBtn(false);
    }
  }

  setCalender(from) {
    if(from !="showAnspopup") {
      this.date.setDate(1);
    }
    if((this.date.getFullYear()%4 == 0 || this.date.getFullYear()%400 == 0) && this.date.getMonth() == 1) {
      var days=this.monthsArr[this.date.getMonth()].days+1;
    } else {
      var days=this.monthsArr[this.date.getMonth()].days;
    }
    if(this.date.getDay() == 0) {
      this.startIndex = this.date.getDay()+this.ArrweekDays.length-1;
    } else {
      this.startIndex = this.date.getDay()-1;
    }
    if(from == "popup") {
      for(let i = 0;i<this.monthDatesinPopup.nativeElement.children[0].children.length;i++) {
        this.monthDatesinPopup.nativeElement.children[0].children[i].src="";
      }
      if(this.monthfromLocalMachine) {
        let monthInfo=this.monthsArr.filter((item) => item.checkRightorWrong == true)[0];
        if(monthInfo.id == this.feedbackObj.correct_month) {
          this.isCorrectMonth = true;
          monthInfo.ImginpopUp = monthInfo.rightmonthImg;
        } else {
          this.isCorrectMonth = false;
          monthInfo.ImginpopUp = monthInfo.wrongmonthImg;
        }
      }
      for(let i = 0;i<days;i++) {
        this.monthDatesinPopup.nativeElement.children[0].children[this.startIndex].id = i;
          //this.monthDatesinPopup.nativeElement.children[0].children[this.startIndex].src = this.datesArr[i].dateImg.location=="content" ? this.containgFolderPath +"/"+ this.datesArr[i].dateImg.url : this.assetsPath +"/"+ this.datesArr[i].dateImg.url;
        if(i+1 == this.clickedID && this.clickedID == this.feedbackObj.correct_date) {
          this.monthDatesinPopup.nativeElement.children[0].children[this.startIndex].src = this.datesArr[i].rightdateImg.location=="content" ? this.containgFolderPath +"/"+ this.datesArr[i].rightdateImg.url : this.assetsPath +"/"+ this.datesArr[i].rightdateImg.url;
          this.startIndex++;
          continue;
        } else {
          this.monthDatesinPopup.nativeElement.children[0].children[this.startIndex].src = this.datesArr[i].dateImg.location=="content" ? this.containgFolderPath +"/"+ this.datesArr[i].dateImg.url : this.assetsPath +"/"+ this.datesArr[i].dateImg.url;
          //this.monthDatesinPopup.nativeElement.children[0].children[this.startIndex].src = this.datesArr[i].wrongdateImg.location=="content" ? this.containgFolderPath +"/"+ this.datesArr[i].wrongdateImg.url : this.assetsPath +"/"+ this.datesArr[i].wrongdateImg.url;
        }
        if(i == this.clickedID-1 && this.clickedID-1 != this.feedbackObj.correct_date) {
          this.monthDatesinPopup.nativeElement.children[0].children[this.startIndex].src = this.datesArr[i].wrongdateImg.location=="content" ? this.containgFolderPath +"/"+ this.datesArr[i].wrongdateImg.url : this.assetsPath +"/"+ this.datesArr[i].wrongdateImg.url;
        } else {
          this.monthDatesinPopup.nativeElement.children[0].children[this.startIndex].src = this.datesArr[i].dateImg.location=="content" ? this.containgFolderPath +"/"+ this.datesArr[i].dateImg.url : this.assetsPath +"/"+ this.datesArr[i].dateImg.url;
        }
        this.startIndex++;
      }
    } else if(from=="showAnspopup") {
      for(let i = 0;i<this.monthDatesinPopup.nativeElement.children[0].children.length;i++) {
        this.monthDatesinPopup.nativeElement.children[0].children[i].src="";
      }
      for(let i = 0;i<days;i++) {
        this.monthDatesinPopup.nativeElement.children[0].children[this.startIndex].id = i;
          //this.monthDatesinPopup.nativeElement.children[0].children[this.startIndex].src = this.datesArr[i].dateImg.location=="content" ? this.containgFolderPath +"/"+ this.datesArr[i].dateImg.url : this.assetsPath +"/"+ this.datesArr[i].dateImg.url;
        if(i+1 == this.feedbackObj.correct_date) {
          this.monthDatesinPopup.nativeElement.children[0].children[this.startIndex].src = this.datesArr[i].rightdateImg.location=="content" ? this.containgFolderPath +"/"+ this.datesArr[i].rightdateImg.url : this.assetsPath +"/"+ this.datesArr[i].rightdateImg.url;
          //this.startIndex++;
          //continue;
        } else {
          this.monthDatesinPopup.nativeElement.children[0].children[this.startIndex].src = this.datesArr[i].dateImg.location=="content" ? this.containgFolderPath +"/"+ this.datesArr[i].dateImg.url : this.assetsPath +"/"+ this.datesArr[i].dateImg.url;
          //this.monthDatesinPopup.nativeElement.children[0].children[this.startIndex].src = this.datesArr[i].wrongdateImg.location=="content" ? this.containgFolderPath +"/"+ this.datesArr[i].wrongdateImg.url : this.assetsPath +"/"+ this.datesArr[i].wrongdateImg.url;
        }
        this.startIndex++;
        // if(i == this.clickedID-1 && this.clickedID-1 != this.feedbackObj.correct_date) {
        //   this.monthDatesinPopup.nativeElement.children[0].children[this.startIndex].src = this.datesArr[i].wrongdateImg.location=="content" ? this.containgFolderPath +"/"+ this.datesArr[i].wrongdateImg.url : this.assetsPath +"/"+ this.datesArr[i].wrongdateImg.url;
        // } else {
        //   this.monthDatesinPopup.nativeElement.children[0].children[this.startIndex].src = this.datesArr[i].dateImg.location=="content" ? this.containgFolderPath +"/"+ this.datesArr[i].dateImg.url : this.assetsPath +"/"+ this.datesArr[i].dateImg.url;
        // }
        // this.startIndex++;
      }
    }
    else {
      for(let i = 0;i<days;i++) {
        this.monthDates.nativeElement.children[0].children[this.startIndex].id = i;
          this.monthDates.nativeElement.children[0].children[this.startIndex].src = this.datesArr[i].dateImg.location=="content" ? this.containgFolderPath +"/"+ this.datesArr[i].dateImg.url : this.assetsPath +"/"+ this.datesArr[i].dateImg.url;
        this.startIndex++;
      }
    }
  }

  setData() {
    this.appModel.enableSubmitBtn(false);
    if (this.appModel && this.appModel.content && this.appModel.content.contentData && this.appModel.content.contentData.data) {
      let fetchedData: any = this.appModel.content.contentData.data;
      console.log(fetchedData);
      this.feedback = fetchedData.feedback;
      this.commonAssets = fetchedData.commonassets;
      this.monthsArr = fetchedData.monthsArr;
      this.ArrweekDays=fetchedData.ArrweekDays;
      this.Arryears = fetchedData.Arryears;
      this.datesArr = fetchedData.datesArr;
      this.narratorAudio = fetchedData.commonassets.narrator;
      //this.subjectQuesControl.next(fetchedData.commonassets);
      this.appModel.setQuesControlAssets(fetchedData.commonassets.ques_control);
      this.ques_control = fetchedData.commonassets.ques_control;
      this.noOfImgs = this.commonAssets.imgCount;
      this.isFirstQues = this.commonAssets.isFirstQues;
      this.isLastQues = this.appModel.isLastSection;
      this.isLastQuesAct = this.appModel.isLastSectionInCollection;
      if (this.isLastQuesAct || this.isLastQues) {
        this.appModel.setlastQuesNT();
      }
      this.optionObj = fetchedData.optionObj;
      //this.optArr1 = this.optionObj[0].optionsArr;
      //this.optArr2 = this.optionObj[1].optionsArr;
      this.optionCommonAssets = fetchedData.option_common_assets;
      console.log(this.optionCommonAssets);
      this.feedbackObj = fetchedData.feedback;
      this.rightAnspopupAssets = this.feedbackObj.right_ans_popup;
      this.confirmPopupAssets = fetchedData.feedback.confirm_popup;
      this.quesObj = fetchedData.quesObj[0];
      this.yearSelected= this.quesObj.yearSelected;
      this.monthSelected = this.quesObj.monthSelected;
      this.dateSelected = this.quesObj.dateSelected;
       this.setDatefromJSON();
      // this.myStates = fetchedData.statesArr;
      // this.myStates.map((element) => element.clicked = false);
      // let arr=[];
      // for(let i=0;i<this.myStates.length;i++) {
      //   arr.push(this.myStates[i].capital);
      // }
     // this.copiedstates = arr.filter((item,index) => arr.indexOf(item) === index);
      this.copiedstates.sort();
	  this.myDropDownStates = fetchedData.DropDownArr;
	  this.myRightAnswer = fetchedData.rigthAnswer;
	  this.RightSubmit = fetchedData.rigthAnsweronSubmit;
	  this.noOfSVG = this.commonAssets.totalSVG;
    this.confirmSubmitAssets = fetchedData.submit_confirm;
    this.infoPopupAssets = fetchedData.info_popup;
    //console.log("this.myStates = "+this.myStates.length);
    this.fileUrls = fetchedData.svgFilesArr;
    this.mainSvgfile = fetchedData.svgInfo;
    //this.hoverSvgfile = fetchedData.svgFilesArr.hoverSvgImg;
    //this.clickSvgfile = fetchedData.svgFilesArr.clickSvgImg;
    //this.hoverSvg = this.fileUrls.hoverSvgImg.url;
    //this.clickSvg = this.fileUrls.clickSvgImg.url;
	  this.quesAudio = this.commonAssets.QuestionAudio;
	  this.CorrectAudio = this.commonAssets.CorrectAudio;
	  this.WrongAudio = this.commonAssets.WrongAudio;
    this.partiallyCorrectAudio = this.commonAssets.PartiallyCorrectAudio;
    this.options = fetchedData.statesArr;
    }

  }

  getBasePath() {
    if (this.appModel && this.appModel.content) {
      return this.appModel.content.id + '';
    }
  }
  hoverConfirm() {
    this.confirmPopupAssets.confirm_btn = this.confirmPopupAssets.confirm_btn_hover;
  }
  

    hoverSubmitConfirm(){
        this.confirmSubmitAssets.confirm_btn = this.confirmSubmitAssets.confirm_btn_hover;
    }
    houtSubmitConfirm(){
        this.confirmSubmitAssets.confirm_btn = this.confirmSubmitAssets.confirm_btn_original;
    }
    hoverSubmitDecline(){
        this.confirmSubmitAssets.decline_btn = this.confirmSubmitAssets.decline_btn_hover;
    }
    houtSubmitDecline(){
        this.confirmSubmitAssets.decline_btn = this.confirmSubmitAssets.decline_btn_original;
    }
	
  houtConfirm() {
    this.confirmPopupAssets.confirm_btn = this.confirmPopupAssets.confirm_btn_original;
  }

  hoverDecline() {
    this.confirmPopupAssets.decline_btn = this.confirmPopupAssets.decline_btn_hover;
  }

  houtDecline() {
    this.confirmPopupAssets.decline_btn = this.confirmPopupAssets.decline_btn_original;
  }

  hoverCloseConfirm() {
    this.confirmPopupAssets.close_btn = this.confirmPopupAssets.close_btn_hover;
  }
  houtCloseConfirm() {
    this.confirmPopupAssets.close_btn = this.confirmPopupAssets.close_btn_original;
  }

  hoverClosePopup() {
    this.feedbackObj.popup_commmon_imgs.close_btn = this.feedbackObj.popup_commmon_imgs.close_btn_hover;
  }

  houtClosePopup() {
    this.feedbackObj.popup_commmon_imgs.close_btn = this.feedbackObj.popup_commmon_imgs.close_btn_original;
  }

  hoverOK() {
    this.infoPopupAssets.ok_btn = this.infoPopupAssets.ok_btn_hover;
  }

  houtOK() {
    this.infoPopupAssets.ok_btn = this.infoPopupAssets.ok_btn_original;
  }

  playFeedback() {
    if(this.isCorrectMonth && this.isCorrectYear && this.isCorrectweekDay && this.isCorrectDate) {
      //fully correct
      this.checked = true;
      this.feedbackPopupAudio.nativeElement.src= this.commonAssets.CorrectAudio.location=="content" ? this.containgFolderPath +"/"+ this.commonAssets.CorrectAudio.url : this.assetsPath +"/"+ this.commonAssets.CorrectAudio.url;
      this.feedbackPopupAudio.nativeElement.load();
      this.feedbackPopupAudio.nativeElement.play();
      this.feedbackPopupAudio.nativeElement.onended=()=> {
        this.closeModal();
        $("#optionsBlock").css("opacity", "0.3");
        $("#optionsBlock").css("pointer-events", "none");
        document.getElementById("mainques").style.pointerEvents = "none";
        $("#instructionBar").css("opacity", "0.3");
        $("#instructionBar").css("pointer-events", "none");
        this.appModel.enableSubmitBtn(false);
        //this.appModel.handlePostVOActivity(true);
      }
    } else  {
      //fully incorrect
      this.feedbackPopupAudio.nativeElement.src= this.commonAssets.WrongAudio.location=="content" ? this.containgFolderPath +"/"+ this.commonAssets.WrongAudio.url : this.assetsPath +"/"+ this.commonAssets.WrongAudio.url;
      this.feedbackPopupAudio.nativeElement.load();
      this.feedbackPopupAudio.nativeElement.play();
      this.feedbackPopupAudio.nativeElement.onended=()=> {
        this.closeModal();
        //this.resetActivity();
      }
    } 
  }

  resetActivity() {
    //this.submittedArray=[];
    for(let i=0;i<this.submittedArray.length;i++) {
      this.submittedArray[i].clicked = false;
      document.getElementById(this.submittedArray[i].tooltipID).style.pointerEvents="";
      document.getElementById(this.submittedArray[i].tooltipID).style.left="0";
      document.getElementById(this.submittedArray[i].tooltipID).style.top="0";
      //document.getElementById(this.submittedArray[i].tooltipID).classList.value="tooltipHidden";
      $("#"+this.submittedArray[i].tooltipID).removeClass("tooltipshow");
      $("#"+this.submittedArray[i].tooltipID).addClass("tooltipHidden");
      //let index=this.myStates.findIndex(element => element.id == this.submittedArray[i].id);
      //$(document.getElementById("mainques").children[0].children[index+1].children[0].children[0].getAttribute("xlink:href"))[0].children[0].setAttribute("fill",this.originalcolor);
      }
      this.submittedArray=[];
      document.getElementById('dropdownviaTooltip').style.opacity = "0";
      document.getElementById("line0").setAttribute("x1","0");
      document.getElementById("line0").setAttribute("x2","0");
      document.getElementById("line0").setAttribute("y1","0");
      document.getElementById("line0").setAttribute("y2","0");
      document.getElementById("dropdown").classList.add("dropdownhidden");
    this.appModel.enableSubmitBtn(false);
    this.paginationArray=[];
    this.rightAnswerCounter=0;
    this.wrongAnswerCounter=0;
  }

  showAnswerFeedback() {
    if(this.feedbackObj.correct_month!="") {
      this.date.setDate(this.feedbackObj.correct_date);
      //let indexofRightdate = this.datesArr.findIndex((item)=> item.id == this.feedbackObj.correct_date);
      if(this.monthsArr.filter((item) => item.selected == true)[0] !=undefined) {
        this.monthsArr.filter((item) => item.selected == true)[0].selected = false;
        this.monthsArr.filter((item) => item.checkRightorWrong == true)[0].checkRightorWrong = false;
      }
      let indexofRightmonth=this.monthsArr.findIndex((item)=> item.id == this.feedbackObj.correct_month);
      this.monthsArr[indexofRightmonth].checkRightorWrong  =true;
      this.monthsArr[indexofRightmonth].ImginpopUp = this.monthsArr[indexofRightmonth].rightmonthImg;
      this.date.setMonth(indexofRightmonth);
    }
    else if(this.feedbackObj.correct_year!= "") {
      this.date.setFullYear(this.feedbackObj.correct_year);
      let indexofRightyear = this.monthsArr.findIndex((item)=> item.id == this.feedbackObj.correct_year);
      this.Arryears[indexofRightyear].checkRightorWrong=true;
      this.Arryears[indexofRightyear].ImginpopUp = this.Arryears[indexofRightyear].rightdateImg;
    }
    else if(this.feedbackObj.correct_weekDay!="") {
      if(this.ArrweekDays.filter((item) => item.selected == true)[0] !=undefined) {
        this.ArrweekDays.filter((item) => item.selected == true)[0].selected = false;
        this.ArrweekDays.filter((item) => item.checkRightorWrong == true)[0].checkRightorWrong = false;
      }
      let indexofRightweekday=this.ArrweekDays.findIndex((item)=> item.id == this.feedbackObj.correct_weekDay);
      this.ArrweekDays[indexofRightweekday].checkRightorWrong=true;
        this.ArrweekDays[indexofRightweekday].weekDayImginpopUp = this.ArrweekDays[indexofRightweekday].rightweekDayImg;
    }
    this.setCalender("showAnspopup");
  }

  showFeedback(id: string, flag: string) {
    if (id == "submit-modal-id") {
      this.confirmSubmitRef.nativeElement.classList = "modal";
    }
    if (id == "info-modal-id") {
      this.infoModalRef.nativeElement.classList = "modal";
      this.rightAnswerCounter=0;
      if (this.feedbackInfoAudio && !this.feedbackInfoAudio.nativeElement.paused) {
        this.feedbackInfoAudio.nativeElement.pause();
        this.feedbackInfoAudio.nativeElement.currentTime = 0;
      }
    }
    if(id == "showAnswer-modal-id" && flag == "answer") {
      this.checked=true;
      this.attemptType = "auto";
      this.confirmModalRef.nativeElement.classList = "modal";
      this.showAnswerFeedback();
      this.popupRef.nativeElement.classList="displayPopup modal";
      this.appModel.notifyUserAction();
      this.feedbackshowPopupAudio.nativeElement.src=this.commonAssets.showAnsAudio.location=="content" ? this.containgFolderPath +"/"+ this.commonAssets.showAnsAudio.url : this.assetsPath +"/"+ this.commonAssets.showAnsAudio.url;
      this.feedbackshowPopupAudio.nativeElement.load();
      this.feedbackshowPopupAudio.nativeElement.play();
      this.feedbackshowPopupAudio.nativeElement.onended = () => {
        this.closeModal();
      }
      $("#optionsBlock").css("opacity", "0.3");
      $("#optionsBlock").css("pointer-events", "none");
      //document.getElementById("mainques").style.pointerEvents = "none";
      $("#instructionBar").css("opacity", "0.3");
      $("#instructionBar").css("pointer-events", "none");
      //this.appModel.handlePostVOActivity(true);
      this.appModel.enableSubmitBtn(false);
    }
    if(id == "showAnswer-modal-id" && flag == "no") {
      this.confirmModalRef.nativeElement.classList = "modal";
      this.appModel.notifyUserAction();
    }
    if (flag == "yes") {
      //this.onSubmit();
            this.setCalender("popup");            
            this.attemptType = "manual";
            this.popupRef.nativeElement.classList = "displayPopup modal";
            this.playFeedback();
      //}
    }
     else if(id == "showAnswer-modal-id" && flag == "no") {
      this.showAnswerRef.nativeElement.classList="modal";
     }
    //  else {
    //   this.appModel.notifyUserAction();
    // }
  }

  closeModal() {
    if (!this.feedbackshowPopupAudio.nativeElement.paused) {
      this.feedbackshowPopupAudio.nativeElement.pause();
      this.feedbackshowPopupAudio.nativeElement.currentTime = 0;
    }
    if (!this.feedbackPopupAudio.nativeElement.paused) {
      this.feedbackPopupAudio.nativeElement.pause();
      this.feedbackPopupAudio.nativeElement.currentTime = 0;
    }
    this.showAnswerRef.nativeElement.classList="modal";
    this.popupRef.nativeElement.classList = "modal";
    //this.appModel.notifyUserAction();
    if (this.checked) {
      this.blinkOnLastQues();
      $("#optionsBlock").css("opacity", "0.3");
      $("#optionsBlock").css("pointer-events", "none");
      document.getElementById("mainques").style.pointerEvents = "none";
      $("#instructionBar").css("opacity", "0.3");
      $("#instructionBar").css("pointer-events", "none");
      this.appModel.enableSubmitBtn(false);
      //this.appModel.handlePostVOActivity(true);
    }
    if (!this.checked) {
      //this.resetActivity();
      this.appModel.wrongAttemptAnimation();
      setTimeout(() => {
       // $("#instructionBar").removeClass("disable_div");
      }, 1000);
      //$("#optionsBlock .options").removeClass("disable_div");
      //$("#optionsBlock .options").css("opacity", "unset");
    }
    }
  }


