(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{294:function(a,t,s){"use strict";s.r(t);var e=s(10),r=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"_2022년-7월-til"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2022년-7월-til"}},[a._v("#")]),a._v(" 2022년 7월 TIL")]),a._v(" "),t("h2",{attrs:{id:"_2022-07-29"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2022-07-29"}},[a._v("#")]),a._v(" 2022.07.29")]),a._v(" "),t("h3",{attrs:{id:"입문용-css-강의-촬영-완료"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#입문용-css-강의-촬영-완료"}},[a._v("#")]),a._v(" 입문용 CSS 강의 촬영 완료")]),a._v(" "),t("p",[a._v("강의 촬영을 전부 마치고 수업 자료 제작에 들어갔다. 강의용 자료와 레퍼런스 코드를 제작하는 단계, 실제 촬영을 진행하는 단계, 수업과 함께 실제 수강생들이 보게 될 수업 자료를 제작하는 단계에서 각각 고려해야 할 것이 너무도 달라 내 마인드셋을 변경하는데에 시간이 좀 걸리는 중.")]),a._v(" "),t("h3",{attrs:{id:"apollo-client의-frompromise와-flatmap"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#apollo-client의-frompromise와-flatmap"}},[a._v("#")]),a._v(" Apollo-client의 fromPromise와 flatMap")]),a._v(" "),t("p",[a._v("회사 개발팀 쪽에서 로그인 인증 관련하여 치명적인 오류가 발생했다는 소식을 들었다. 자세한 사항은 보안상 설명할 수 없지만, 해당 이슈에 대한 리포트를 들으며 Apollo-client에서 fromPromise와 flatMap이라는 메서드를 제공한다는 사실을 알게 되었다.")]),a._v(" "),t("p",[a._v("그리고 이 부분에 대해 공부를 충분히 한 뒤 이해한 내용을 TIL에 적고 싶었는데, 아직 이해 못했다. (알쏭달쏭 코딩세상!!) 공부하다가 머리에서 김이 난 부분은 크게 세 군데였다.")]),a._v(" "),t("ol",[t("li",[a._v("여러번의 토큰 재요청이 중첩되어 프로미스 체인으로 인한 에러가 발생할 때, Apollo-client는 해당 구문의 출력값을 zen-observable이라는 라이브러리에서 제공하는 Observable 객체로 바꿔준다. (이해가 안되는 부분: 그래서 Observable이 대체 뭔데?)")]),a._v(" "),t("li",[a._v("fromPromise는 Observable 객체를 Promise로 바꾸어 뱉어준다.")]),a._v(" "),t("li",[a._v("그 다음에 flatMap을 이용하여 forward를 실행할 수 있도록 만들어준다.")])]),a._v(" "),t("p",[a._v("더 심각하게 머리의 스팀을 유발한 부분도 있다.\n동일한 로그인 인증 코드를 Context-API를 이용하여 전역관리하는 프로젝트와 Recoil을 이용하여 전역관리하는 프로젝트 두 개에서 실행해봤는데, Context-API를 이용할 때에는 fromPromise를 쓰지 않아도 로그인 인증&인가가 무사히 진행되었다(!). 그런데 Recoil을 사용한 경우에는 에러가 발생했다. fromPromise와 flatMap을 이용해야지만 문제 없이 통신이 작동했다.")]),a._v(" "),t("p",[a._v("마침 개인 프로젝트에서 로그인, 회원가입을 구현해야하는 단계이기에, 궁금한 부분들을 다 실험해보려고 한다. 실제로 브라우저에 어떻게 찍히는지 확인하지 않고 머리만 굴려서는 애꿎은 내 머리만 찐만두될 것 같음.")]),a._v(" "),t("p",[a._v("작업하면서 참고하려고 찾아 놓은 블로그를 함께 링크해둔다.")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://chanyeong.com/blog/post/47",target:"_blank",rel:"noopener noreferrer"}},[a._v("Apollo Client 토큰 재발급"),t("OutboundLink")],1)]),a._v(" "),t("h2",{attrs:{id:"_2022-07-20"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2022-07-20"}},[a._v("#")]),a._v(" 2022.07.20")]),a._v(" "),t("h3",{attrs:{id:"webpack과-babel"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webpack과-babel"}},[a._v("#")]),a._v(" Webpack과 Babel")]),a._v(" "),t("p",[a._v("Webpack과 Babel이 보통 함께 언급되기 때문에 지금까지 두 모듈의 역할을 헷갈리고 있었는데, 그 차이점을 확실하게 이해하게 되었다.")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("Webpack이란?"),t("br"),a._v("\n먼저 Webpack은 모던 자바스크립트 웹 서비스 & 웹 어플리케이션을 위한 번들러(Bundler)이다.")]),a._v(" "),t("p",[a._v("MPA 웹 실무를 뛸 때부터, 괜찮은 웹사이트를 보면 소스코드를 뜯어보는 습관이 있었다. 기존의 jQuery 웹페이지의 경우에는 대부분 개발자 도구로 웹페이지를 열어보면 분리된 html/css/js 파일을 확인할 수 있다. php나 asp 등으로 작업을 진행하더라도 웹 브라우저에 그릴 때에는 html/css/js 파일로 렌더링되기 때문인데, 이상하게 최근 핫한 웹 서비스 페이지의 경우에는 html/css/js가 용도별로 분리되어 있지 않고 한두개의 파일에 몽땅 합쳐져 있는 경우가 많았다. 그마저도 개행 없이 모든 코드가 한줄에 싹 쑤셔넣어져 있는 모습이 신기했던 기억이 난다. 분명 개발자가 이런 형태로 작업을 했을리는 없는데 왜 브라우저에 도착한 소스코드가 이런 형태인거지? 싶어서 말이다.")]),a._v(" "),t("p",[a._v('Next.js를 처음 배우면서, 내가 작업하는 SPA 페이지의 소스코드가 그런 식으로 되어있다는 것을 알고 "유레카!"의 기분을 느꼈던 기억이 난다. 옛날에 내가 뜯어보며 신기해했던 그 코드들이, 대부분 JS SPA 프레임워크/라이브러리로 만들어진 페이지라는 것을 알게 된 것이다. 그 당시에는 Next.js라는 프레임워크가 그 병합 작업을 해준다고 생각했다. 하지만 알고보니 Next.js 자체가 아니라 Webpack과 같은 번들러가 해주는 역할이었다.')])]),a._v(" "),t("li",[t("p",[a._v("Babel이란?"),t("br"),a._v("\n그리고 Babel은 자바스크립트 컴파일러이다. 사실 이 정의부터가 의문이었다. 자바스크립트는 인터프리터 언어인데 왜 컴파일러가 필요하지?")]),a._v(" "),t("p",[a._v("알아보니 일부에서는 컴파일러보다는 트랜스파일러가 좀 더 정확한 지칭이라는 의견도 있더라. 엄밀하게 말해서, 트랜스파일러는 컴파일러와는 조금 다르다. 컴파일러는 a라는 언어를 전혀 다른 b라는 언어로 번역해주는 도구지만, 트랜스파일러는 a라는 언어를 a로 번역해준다. Babel은 자바스크립트를 또 다른 형태의 자바스크립트로 바꿔주는 역할을 한다.")]),a._v(" "),t("p",[a._v("모던 자바스크립트는 ES6 이후의 문법을 사용하지만, 아직 ES6을 제대로 실행시키지 못하는 구버전의 브라우저 환경도 많이 남아있다. 그런 환경을 위해, ES6 문법의 자바스크립트 코드를 ES5 이전의 코드로 변경시켜 주는 것이 바로 Babel이 가지고 있는 주요 기능이라고 볼 수 있다.")]),a._v(" "),t("p",[a._v("참고로 Sass 등의 CSS 전처리기와 typescript도 트랜스파일러에 포함된다.")])])]),a._v(" "),t("h3",{attrs:{id:"css-입문자-강의"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#css-입문자-강의"}},[a._v("#")]),a._v(" CSS 입문자 강의")]),a._v(" "),t("p",[a._v("css를 업무에 지장이 없을 정도로는 사용한다고 생각했는데, 입문자를 위한 full 커리큘럼을 짜고 수업을 진행하다 보니 나도 그간 어설프게 아는 부분이 많았다는 것을 깨닫고 있다. 가장 큰 예시가 캐스케이딩의 개념. 실무에 문제가 없을 정도의 직관적 인지는 갖추고 있지만, 캐스케이딩이 구체적으로 무엇을 의미하며 어떠한 원리로 동작하는지에 대해서는 잘 알고 있지 못했다. css에서 사용할 수 있는 함수의 개념도 모호했는데, 글로 정리하고 말로 설명하다보니 조금 가닥이 잡힌다.")]),a._v(" "),t("p",[a._v("css 커리큘럼을 짜고 수업 내용을 정리하는 것은 내가 그동안 알고 있었던 것에 대한 재정의 작업이라는 생각이 든다. 업무 강도는 결코 만만하지 않지만.. (아니, 사실 육체적으로는 매우 하드하지만) 머리는 팽팽 돌아가고 있다. 공부가 정말 많이 된다. 지금 정리한 내용들도 블로그에 차근차근 써나가고 싶다.")])])}),[],!1,null,null,null);t.default=r.exports}}]);