(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{282:function(t,r,o){t.exports=o.p+"assets/img/230619_1.31a43b87.png"},305:function(t,r,o){"use strict";o.r(r);var e=o(10),s=Object(e.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"_2023-6월-til"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2023-6월-til"}},[t._v("#")]),t._v(" 2023 6월 TIL")]),t._v(" "),r("h2",{attrs:{id:"_6월-돌아보기"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_6월-돌아보기"}},[t._v("#")]),t._v(" 6월 돌아보기")]),t._v(" "),r("ol",[r("li",[r("p",[r("strong",[t._v("몰아치는 신사업의 쓰나미.")])]),t._v(" "),r("ul",[r("li",[t._v("정신도 쓸려가고, 몸도 쓸려가고, 에너지도 쓸려가고.")]),t._v(" "),r("li",[t._v("그래도 와중에 최소한의 정신은 붙잡고 일정 핸들링하려 노력했다. 결과적으로 일정 면에서는 나름 성공했음.")]),t._v(" "),r("li",[t._v("일정 조정하고 내 R&R을 벗어나는 영역의 업무까지 커버하며 스트레스를 받을지언정 제품 자체는 약속된 기한 안에 무조건 런칭이 가능해야 한다고 생각한다.")]),t._v(" "),r("li",[t._v("그리고 그렇게 했다.")]),t._v(" "),r("li",[t._v("하지만 이번 프로젝트 회고하며 R&R 정리는 한 번 요청해야 할 것 같음. 🙁 주니어 개발자가 이것까지 고려하고 있는건 회사 차원에서도 좀 비효율적이지 않나.. 하는 주관적인 생각. (사실 여러 결정권자들에게 이미 말씀드리기는 했다)")]),t._v(" "),r("li",[t._v("코드를 더 많이 짜고싶당.")])])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("방통대 편입 원서 넣었다.")])]),t._v(" "),r("ul",[r("li",[t._v("원래는 1학년으로 입학하려고 했는데, 현 직장 동료나 전 직장 동료들이랑 이야기하다가 3학년 편입이 경제적이겠다 싶어서 3학년으로 편입으로 방향 틀었다. 퀵하게 응시료 납부하고 관련 서류 제출까지 마무리.")]),t._v(" "),r("li",[t._v("나의 미술학사는 컴과 편입을 위한 빌드업이었나.. (설마 떨어지지는 않겠지)")]),t._v(" "),r("li",[t._v("회사 다니면서 방통대까지 다니려면 좀 바쁘긴 해도 재밌을 것 같다.")]),t._v(" "),r("li",[t._v("CS에 대해 학사 레벨에서 제대로 공부해 본 적이 없어서 무진장 기대중.")]),t._v(" "),r("li",[t._v("😛 대학 졸업하고 나서야 대학 전공 수업의 소중함을 깨달은 30대 k모씨. (당사자성 발언)")])])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("테오의 스프린트 15기")])]),t._v(" "),r("ul",[r("li",[t._v("진!!!짜!!!! 재미있었다.")]),t._v(" "),r("li",[t._v("구글 스프린트라는 방법론에 대하여 짧은 시간 밀도 높게 경험할 수 있었음.")]),t._v(" "),r("li",[t._v("원활한 협업을 위한 여러가지 장치를 설정하고, 그 장치와 그라운드 룰에 의거하여 함께 기획하고 MVP를 개발하는 경험은 앞으로 내가 어떤 일을 하던 좋은 자원이 되어 줄 것이다.")]),t._v(" "),r("li",[t._v("이건 단순한 몇 줄로 끄적이고 흘려보내기는 아까운 경험이라 오랜만에 회고를 작성하는 것으로..")]),t._v(" "),r("li",[t._v("좋은 사람들을 만날 수 있어서 정말 큰 refresh가 되었다.")])])])]),t._v(" "),r("h2",{attrs:{id:"_2023-06-19"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2023-06-19"}},[t._v("#")]),t._v(" 2023.06.19")]),t._v(" "),r("h3",{attrs:{id:"web-worker로-인한-메모리-누수"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#web-worker로-인한-메모리-누수"}},[t._v("#")]),t._v(" Web Worker로 인한 메모리 누수")]),t._v(" "),r("p",[t._v("여러분은 모던 브라우저의 메모리가 터지는 것을 본 적이 있으신가요?"),r("br"),t._v("\n웹 워커를 잘못 사용하면 그럴 수 있으니 조심하라.."),r("br"),t._v("\n동기적 실행을 위해 워커 스레드를 돌렸다면 반드시 꺼줄 것.."),r("br"),t._v("\nworker 글로벌 스콥에서 "),r("code",[t._v("close()")]),t._v(" 메소드를 실행하거나, worker 외부에서 "),r("code",[t._v("worker.terminate()")]),t._v("하면 끌 수 있음. (단, 통상적인 DedicatedWorker에 한한다. "),r("code",[t._v("new Worker()")]),t._v("로 인스턴스 생성한 친구들.)")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://medium.com/hcleedev/web-web-worker-%EC%82%AC%EC%9A%A9%EB%B2%95%EA%B3%BC-%EC%A3%BC%EC%9D%98%ED%95%A0-%EC%A0%90-webpack-%EB%A9%94%EB%AA%A8%EB%A6%AC-%EB%AC%B8%EC%A0%9C-%ED%85%8C%EC%8A%A4%ED%8A%B8-%EB%AA%A8%ED%82%B9-2d77c5b23afe",target:"_blank",rel:"noopener noreferrer"}},[t._v("도움받은 감사한 글 1"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://stackoverflow.com/questions/30500883/javascript-web-worker-close-vs-terminate",target:"_blank",rel:"noopener noreferrer"}},[t._v("도움받은 감사한 글 2"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("strong",[t._v("Horrible한 장면")]),t._v(" "),r("img",{attrs:{src:o(282),alt:"230619_1"}})])]),t._v(" "),r("h2",{attrs:{id:"_2023-06-18"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2023-06-18"}},[t._v("#")]),t._v(" 2023.06.18")]),t._v(" "),r("h3",{attrs:{id:"storybook-test-runner"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#storybook-test-runner"}},[t._v("#")]),t._v(" Storybook test runner")]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("Ref")]),t._v(" "),r("p",[t._v("스토리북 test runner docs : "),r("a",{attrs:{href:"https://storybook.js.org/docs/react/writing-tests/test-runner",target:"_blank",rel:"noopener noreferrer"}},[t._v("바로가기"),r("OutboundLink")],1)])]),t._v(" "),r("ul",[r("li",[t._v("Storybook test runner는 당신이 작성한 모든 스토리를 실행 가능한(executable) 테스트로 전환한다. Jest와 Playwright가 제공됨.\n"),r("ul",[r("li",[t._v("play function이 없는 스토리는? -> 해당 스토리가 에러 없이 렌더되는지 검증한다.")]),t._v(" "),r("li",[t._v("play function이 있는 스토리는? -> play function을 통과하는지, 그리고 모든 assertion이 패스되는지 확인한다.")])])])]),t._v(" "),r("h3",{attrs:{id:"storybook-interaction-test"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#storybook-interaction-test"}},[t._v("#")]),t._v(" Storybook interaction test")]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("Ref")]),t._v(" "),r("p",[t._v("스토리북 Play function docs : "),r("a",{attrs:{href:"https://storybook.js.org/docs/react/writing-stories/play-function",target:"_blank",rel:"noopener noreferrer"}},[t._v("바로가기"),r("OutboundLink")],1)])]),t._v(" "),r("p",[r("a",{attrs:{href:"https://storybook.js.org/addons/@storybook/addon-interactions",target:"_blank",rel:"noopener noreferrer"}},[t._v("@storybook/addon-interactions"),r("OutboundLink")],1),t._v("를 이용하여 사용 가능."),r("br"),t._v("\ndocs를 보면 알겠지만, 다음과 같은 addon에 의존성이 있다. 전부 install 필요")]),t._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -D @storybook/addon-interactions @storybook/jest @storybook/testing-library\n")])])]),r("p",[t._v("그리고 "),r("code",[t._v(".storybook/main.js")]),t._v("에 addon 설정도 해준다.")]),t._v(" "),r("div",{staticClass:"language-ts extra-class"},[r("pre",{pre:!0,attrs:{class:"language-ts"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  addons"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@storybook/addon-interactions"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),r("p",[t._v("이 때 주의할 점, "),r("code",[t._v("@storybook/addon-interactions")]),t._v("는 "),r("code",[t._v("@storybook/addon-actions")]),t._v("와 "),r("code",[t._v("@storybook/addon-essentials")]),t._v(" 보다 반드시 나중에 위치해야 한다.")]),t._v(" "),r("h2",{attrs:{id:"_2023-06-15"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2023-06-15"}},[t._v("#")]),t._v(" 2023.06.15")]),t._v(" "),r("h3",{attrs:{id:"chromatic"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#chromatic"}},[t._v("#")]),t._v(" Chromatic")]),t._v(" "),r("p",[t._v("Storybook 배포를 Chromatic으로 하면 컴포넌트 스토리 변경 후 배포시마다 review 과정을 거칠 수 있다."),r("br"),t._v("\n배포도 간편하고 UI 관련 로직 변경에 대한 accept/reject 과정도 기록으로 남길 수 있어서 짱 좋은 듯"),r("br"),t._v("\n개인적으로 만들고 있는 generator 웹앱에 chromatic을 달았다. github action을 이용한 ci도 붙여보자.")]),t._v(" "),r("ul",[r("li",[t._v("Chromatic CI Docs : "),r("a",{attrs:{href:"https://www.chromatic.com/docs/ci",target:"_blank",rel:"noopener noreferrer"}},[t._v("문서 바로가기"),r("OutboundLink")],1)])]),t._v(" "),r("h3",{attrs:{id:"회사에서는"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#회사에서는"}},[t._v("#")]),t._v(" 회사에서는..")]),t._v(" "),r("ul",[r("li",[t._v("신사업 프로젝트 진행 중")]),t._v(" "),r("li",[t._v("2주 단위 스프린트 3회 이내에 상용 서비스 가능한 MVP를 뽑아내야한다")]),t._v(" "),r("li",[t._v("목표는 빠른 개발.. 하지만 최대한 깔끔한 코드를 지향.. (이게 되나)")]),t._v(" "),r("li",[t._v("아무튼 최선을 다해보는것으로")]),t._v(" "),r("li",[t._v("에디터 클라이언트 담당자로서, 혼자 힘으로 a-z 개발하는 첫 프로젝트다.")]),t._v(" "),r("li",[t._v("끝내고 프로젝트 리뷰 뿐 아니라 개인 리뷰도 진행 할 것")])]),t._v(" "),r("h2",{attrs:{id:"_2023-06-11"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2023-06-11"}},[t._v("#")]),t._v(" 2023.06.11")]),t._v(" "),r("h3",{attrs:{id:"storybook-v7-0"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#storybook-v7-0"}},[t._v("#")]),t._v(" Storybook v7.0")]),t._v(" "),r("p",[t._v("2년만에 스토리북 메이저 버전 업데이트가 있었다."),r("br"),t._v("\n야금야금 사용만 하다가 시간이 나서 릴리즈 노트 훑어봄.")]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("관련 공식 문서")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://storybook.js.org/releases/7.0",target:"_blank",rel:"noopener noreferrer"}},[t._v("릴리즈 노트"),r("OutboundLink")],1),r("br"),t._v(" "),r("a",{attrs:{href:"https://storybook.js.org/blog/storybook-7-0/",target:"_blank",rel:"noopener noreferrer"}},[t._v("공식 Community Article"),r("OutboundLink")],1)])]),t._v(" "),r("h3",{attrs:{id:"storybook-v7-릴리즈-노트-빠르게-훑어보기"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#storybook-v7-릴리즈-노트-빠르게-훑어보기"}},[t._v("#")]),t._v(" Storybook v7 릴리즈 노트 빠르게 훑어보기")]),t._v(" "),r("ul",[r("li",[t._v("Storybook 7.0 - March 2023")]),t._v(" "),r("li",[t._v("The future of UI development")]),t._v(" "),r("li",[t._v("SB7.0 is a full rework of Storybook's core with fast build and next-generation interaction testing.\n"),r("blockquote",[r("p",[t._v("7.0 버전에서 스토리북의 코어를 재작업했다. 차세대 interaction 테스트와 빠른 빌드를 위하여..")])])]),t._v(" "),r("li",[t._v("3️⃣ "),r("a",{attrs:{href:"https://storybook.js.org/blog/storybook-csf3-is-here/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Component Story Format v3"),r("OutboundLink")],1),t._v(" trims boilerplate code and improves ergonomics\n"),r("blockquote",[r("p",[t._v("CSF - 즉 컴포넌트 스토리 작성 포맷 자체가 v3으로 업그레이드되었다. 체감상 컴포넌트 스토리 작성하기가 훨씬 편해졌고 보일러 플레이트 코드도 심플해졌다. ergonomics을 향상시켰다고 하는데 말 그대로. csf3는 사용자 친화적으로 발전된 형태의 문법.")])])]),t._v(" "),r("li",[t._v("🛡️ "),r("a",{attrs:{href:"https://storybook.js.org/blog/improved-type-safety-in-storybook-7/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Improved type safety"),r("OutboundLink")],1),t._v(" "),r("blockquote",[r("p",[t._v("타입 안전성 향상")])])]),t._v(" "),r("li",[t._v("📚 "),r("a",{attrs:{href:"https://storybook.js.org/blog/storybook-7-docs/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docs overhaul"),r("OutboundLink")],1),t._v(" with MDX2 support and streamlined doc blocks\n"),r("blockquote",[r("p",[t._v("Docs 재정비. MDX2 지원을 포함하여 docs 작성이 훨씬 편리해졌다."),r("br"),t._v("\n상세한 내용은 링크 참고. 개인적으로 autodocs 옵션이 너무 편리하고 좋음")])])]),t._v(" "),r("li",[t._v("🏗️ "),r("a",{attrs:{href:"https://storybook.js.org/blog/framework-api/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Frameworks API"),r("OutboundLink")],1),t._v(" for streamlined integrations\n"),r("ul",[r("li",[t._v("🔼 "),r("a",{attrs:{href:"https://storybook.js.org/blog/integrate-nextjs-and-storybook-automatically/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Zero-config NextJS"),r("OutboundLink")],1)]),t._v(" "),r("li",[t._v("🇸 "),r("a",{attrs:{href:"https://storybook.js.org/blog/storybook-for-sveltekit/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Zero-config SvelteKit"),r("OutboundLink")],1),t._v(" "),r("blockquote",[r("p",[t._v("integration을 더 원활하게 지원. Frameworks API의 전반적인 개선.")])])])])]),t._v(" "),r("li",[t._v("⚡️ "),r("a",{attrs:{href:"https://storybook.js.org/blog/first-class-vite-support-in-storybook/",target:"_blank",rel:"noopener noreferrer"}},[t._v("First-class Vite support"),r("OutboundLink")],1),t._v(": Storybook is configured automatically based on your Vite settings, and reduced installation size & startup time.\n"),r("blockquote",[r("p",[t._v("storyook v6까지는 기본 번들러가 webpack4였다. vite 지원 자체는 예전부터 되었으나 여러모로 어려움이 많고 설정하기 번거로웠던 것도 사실.. v7는 기본 제공하는 두가지 번들러 옵션 중 하나로 vite를 채택할 수 있다. (vite 혹은 webpack5) 여러모로 스토리북을 vite 생태계에 원활하게 통합시킬 수 있도록 rework 하였음."),r("br"),t._v("\n이 부분도 재밌다. 가급적이면 링크걸린 원문 블로그를 정독하는 것을 추천.")])])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://storybook.js.org/blog/test-component-interactions-with-storybook/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Improved interaction testing"),r("OutboundLink")],1),t._v(": stabilized test runner and interactions debugger\n"),r("blockquote",[r("p",[t._v("interaction 테스팅 향상 (대환영! 너무 좋다!)"),r("br"),t._v("\n테스트 러너와 인터렉션 디버거를 안정화시켰다.")])])]),t._v(" "),r("li",[t._v("☂️ "),r("a",{attrs:{href:"https://storybook.js.org/blog/code-coverage-with-the-storybook-test-runner/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Code coverage"),r("OutboundLink")],1),t._v(" for interaction tests\n"),r("blockquote",[r("p",[t._v("interaction 테스트에 대한 코드 커버리지도 확인 가능 (갓토리북)")])])]),t._v(" "),r("li",[t._v("🎨 "),r("a",{attrs:{href:"https://storybook.js.org/blog/7-0-design-alpha/",target:"_blank",rel:"noopener noreferrer"}},[t._v("UI design refresh"),r("OutboundLink")],1),t._v(": edge-to-edge layout, redrawn icons & refined forms\n"),r("blockquote",[r("p",[t._v("storybook 자체의 UI도 개선되었습니다👍")])])]),t._v(" "),r("li",[t._v("🏛️ "),r("a",{attrs:{href:"https://storybook.js.org/blog/storybook-ecosystem-ci/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Improved stability"),r("OutboundLink")],1),t._v(" with Ecosystem CI\n"),r("blockquote",[r("p",[t._v("Ecosystem CI란?: 디펜던시 업그레이드로 인한 버그를 미연에 방지할 수 있도록 생태계 단위에서 사전에 경고하는 CI.. 인 것 같다. 전반적인 안정성이 향상되었음. (패키지와 디펜던시 관련 이슈에 대하여)")])])]),t._v(" "),r("li",[t._v("💯 Hundreds more improvements at every level\n"),r("blockquote",[r("p",[t._v("그 외에도 제품 전반을 통틀어 수백가지 개선점이 있습니다. 좋네요. 흥미진진.")])])])]),t._v(" "),r("h2",{attrs:{id:"_2023-06-05"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2023-06-05"}},[t._v("#")]),t._v(" 2023.06.05")]),t._v(" "),r("ul",[r("li",[t._v("6월 원티드 프리온보딩 프론트엔드 챌린지를 신청했다.")]),t._v(" "),r("li",[t._v("본래 이직이나 취업에 목표를 두고 있는 챌린지이지만.. 이번 내 목표는 그건 아니고, 역량 향상이다.")]),t._v(" "),r("li",[r("code",[t._v("컴포넌트란 무엇인가?")]),t._v(" 그리고 "),r("code",[t._v("컴포넌트 주도 개발")]),t._v("이라는 토픽 자체가 흥미롭다. (+ storybook)")])]),t._v(" "),r("h3",{attrs:{id:"그래서-컴포넌트란-무엇인가"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#그래서-컴포넌트란-무엇인가"}},[t._v("#")]),t._v(" 그래서, 컴포넌트란 무엇인가?")]),t._v(" "),r("ul",[r("li",[t._v("컴포넌트가 무엇인지를 먼저 정의하고 들어가야 한다.\n"),r("ul",[r("li",[t._v("Component 일 수도")]),t._v(" "),r("li",[t._v("Web Component 일 수도")]),t._v(" "),r("li",[t._v("React Component 일 수도..")])])])]),t._v(" "),r("h3",{attrs:{id:"cdd란"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cdd란"}},[t._v("#")]),t._v(" CDD란?")]),t._v(" "),r("ul",[r("li",[t._v("Component Driven Development")]),t._v(" "),r("li",[t._v("컴포넌트 주도 개발")]),t._v(" "),r("li",[t._v("프론트엔드 개발 시 컴포넌트를 기준으로 사고한다")])]),t._v(" "),r("h3",{attrs:{id:"상향식-컴포넌트-개발-vs-하향식-컴포넌트-개발"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#상향식-컴포넌트-개발-vs-하향식-컴포넌트-개발"}},[t._v("#")]),t._v(" 상향식 컴포넌트 개발 vs 하향식 컴포넌트 개발")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("상향식")]),t._v(" "),r("ul",[r("li",[t._v("가장 작은 단위의 하위 컴포넌트를 먼저 개발")]),t._v(" "),r("li",[t._v("이런 작은 컴포넌트를 조합하여 전체적인 컴포넌트를 완성")]),t._v(" "),r("li",[t._v("하위 컴포넌트를 만들 때에는, 일반 사용자 뿐 아니라 개발자의 사용성도 고려해야 한다.")]),t._v(" "),r("li",[r("strong",[t._v("숙련도가 부족하면 YAGNI에 빠지기 쉽다.")])])])]),t._v(" "),r("li",[r("p",[t._v("하향식")]),t._v(" "),r("ul",[r("li",[t._v("전체 시스템의 큰 구성요소를 먼저 개발")]),t._v(" "),r("li",[t._v("중복되는 작은 컴포넌트나 공통 영역을 분리")]),t._v(" "),r("li",[t._v("전체 시스템의 디자인과 구조를 먼저 구성하고, 이를 바탕으로 세부적인 요소들을 개발")]),t._v(" "),r("li",[r("strong",[t._v("나중에 하자고 하지만 하지 않는다. (르블랑의 법칙 / Leblance's Law)")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("한 번 작성한 쓰레기 코드를 나중에 수정하는 일은 결코 없다..")])])])])])])]),t._v(" "),r("h3",{attrs:{id:"비제어-컴포넌트-vs-제어-컴포넌트"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#비제어-컴포넌트-vs-제어-컴포넌트"}},[t._v("#")]),t._v(" 비제어 컴포넌트 vs 제어 컴포넌트")]),t._v(" "),r("ul",[r("li",[t._v("제어\n"),r("ul",[r("li",[t._v("단일 진실 원천")]),t._v(" "),r("li",[t._v("늘 입력된 값과 상태가 동일하다.")]),t._v(" "),r("li",[t._v("push component")])])]),t._v(" "),r("li",[t._v("비제어\n"),r("ul",[r("li",[t._v("필요한 시점에 입력된 값을 트리거하여 가져온다.")]),t._v(" "),r("li",[t._v("pull component")])])]),t._v(" "),r("li",[t._v("좋은 예시 아티클 : "),r("a",{attrs:{href:"https://goshacmd.com/controlled-vs-uncontrolled-inputs-react/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Link"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);r.default=s.exports}}]);