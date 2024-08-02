import {Routes} from '@angular/router';
import {QuestionsListComponent} from './main/questions/questions-list/questions-list.component';
import {QuizzesListComponent} from './main/quizzes/quizzes-list/quizzes-list.component';
import {ExamsListComponent} from './main/exams/exams-list/exams-list.component';
import {QuestionComponent} from "./main/questions/question/question.component";
import {AddQuestionComponent} from "./main/questions/question/add-question/add-question.component";
import {MainComponent} from "./main/main.component";
import {ParticipantsListComponent} from "./main/participants/participants-list/participants-list.component";
import {ParticipantComponent} from "./main/participants/participant/participant.component";
import {AddParticipantComponent} from "./main/participants/participant/add-participant/add-participant.component";
import {ViewParticipantComponent} from "./main/participants/participant/view-participant/view-participant.component";
import {QuizComponent} from "./main/quizzes/quiz/quiz.component";
import {ExamComponent} from "./main/exams/exam/exam.component";
import {
  AddGapFillingQuestionComponent
} from "./main/questions/question/gap-filling-question/add-gap-filling-question/add-gap-filling-question.component";
import {
  ViewTrueFalseQuestionComponent
} from "./main/questions/question/true-false-question/view-true-false-question/view-true-false-question.component";
import {
  ViewGapFillingQuestionComponent
} from "./main/questions/question/gap-filling-question/view-gap-filling-question/view-gap-filling-question.component";
import {
  ViewMultipleChoiceQuestionComponent
} from "./main/questions/question/multiple-choice-question/view-multiple-choice-question/view-multiple-choice-question.component";
import {
  ExamsParticipantsListComponent
} from "./main/examsParticipants/exams-participants-list/exams-participants-list.component";
import {ExamParticipantComponent} from './main/examsParticipants/exam-participant/exam-participant.component';
import {quizResolver} from "./main/quizzes/quiz/quiz.resolver";

export const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'questions', component: QuestionsListComponent},
  {path: 'quizzes', component: QuizzesListComponent},
  {path: 'exams', component: ExamsListComponent},
  {path: 'participants', component: ParticipantsListComponent},
  {path: 'examsParticipants', component: ExamsParticipantsListComponent},
  {
    path: 'question', component: QuestionComponent, children: [
      {
        path: 'add', component: AddQuestionComponent, children: [
          {path: 'TrueFalseQuestion', component: ViewTrueFalseQuestionComponent},
          {path: 'GapFillingQuestion', component: AddGapFillingQuestionComponent},
          {path: 'MultipleChoiceQuestion', component: ViewMultipleChoiceQuestionComponent},
        ]
      },
      {
        path: ':id', children: [
          {path: 'TrueFalseQuestion', component: ViewTrueFalseQuestionComponent},
          {path: 'GapFillingQuestion', component: ViewGapFillingQuestionComponent},
          {path: 'MultipleChoiceQuestion', component: ViewMultipleChoiceQuestionComponent},
        ]
      },
    ]
  },
  {
    path: 'quiz', children: [
      {path: 'add', component: QuizComponent},
      {path: ':id', component: QuizComponent, resolve: {quiz: quizResolver}}
    ]
  },
  {
    path: 'exam', children: [
      {path: 'add', component: ExamComponent},
      {path: ':id', component: ExamComponent}
    ]
  },
  {
    path: 'participant', component: ParticipantComponent, children: [
      {path: 'add', component: AddParticipantComponent},
      {path: ':id', component: ViewParticipantComponent},
    ]
  },
  {
    path: 'examParticipant', component: ExamParticipantComponent
  },
  // {path: '**', redirectTo: '/'},
  // , component: ViewQuestionComponent
];
