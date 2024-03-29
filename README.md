#### 에이아이맥스(주) 웹페이지 리뉴얼 히스토리

## 고려 사항
  * [partners] 기업 목록 계열사별 노출 여부
  * GS 인증 마크 추가

## 커밋 히스토리

  * FIX_240220
    * Quick View.on default로 변경
    * Quick View text 변경
    * 인공지능 '과부하-방지' 텍스트 수정
    * business scope title 추가
    * Quick View h2 달기
    * Contact 글씨와 연락처 정보 제거

  * FIX_240219
    * Header 오류 수정

  * FEAT_240219
    * solution 이미지 수정하기
      -> WAS 연결구도 변경 및 캐시서버 이미지 변경
    * Quick View 개발
    * 스크롤시 영상이 멈추는 기능 구현

  * FEAT_240216
    * youtube 썸네일 변경
    * web hosting test
      * http://ai-max.co.kr/APMAX_Home/apmax_index.html -> legacy

  * REFACTOR_240215
    * animation 1번만 실행되게 변경

  * FIX_240215
    * header.on 상황에서 text color -> white로 변경

  * FIX_240214
    * Quick Menu [desktop mode]에서 클릭시 태그가 안넘어가는 이슈 해결

  * FEAT_240214
    * href="#id" 부드럽게 이동하기 
    * Quick Menu 구현 (mobile, desktop)
    * winged_video 구현 (1920, 1280, 1024, 768, 375)

  * FEAT_240213
    * contact 고도화
    * Footer (375, 768, 1024, 1280, 1920)
    * WINGed Section 이미지 편집 및 업로드
      * fadein 애니메이션 추가

  * FEAT_240207
    * contact (375, 768, 1024, 1280, 1920)
      * 반응형 구현

  * FEAT_240206
    * header 의 z-index 수정
      hl_box가 header 위에 위치하고 있는 오류 해결
    * partners 샘플 img파일 추가
    * partners_list 문서 추가
    * partners (375, 768, 1024, 1280, 1920)
      * 협업사 로고 슬라이드 구현
    * contact (375)
      * 지도 스크립트 적용
      * 아이콘 이미지 추가 (tel_num, email)

  * FEAT_240205
    * performance (768, 1024, 1280, 1920)
      * 윙드 비교분석표 -> table 태그로 변경 (유지보수 용이와 품질 향상 효과)

  * FEAT_240202
    * performance (375)
      * counting num 구현
      * 화면에 나타나면 애니메이션 동작하는 js 구현
      * 글자 하나씩 색이 변하는 애니메이션 적용

  * FEAT_240201
    * performance
      * background gradient 적용
      * html 구현

  * FEAT_240131
    * winged_copy (1280, 1920)
      * 가로 슬라이드 제한 (marquee로 인해 옆의 공간으로 이동되는 현상 수정)
      * 모바일 환경일때 줌인/아웃 막기
      * 아이폰(사파리) 환경에서의 오류 수정
    * service (375, 768, 1024, 1280, 1920)
      * 배경이 고정되어있는 attach 모드는 추후에 적용할 예정
      * hover시 카드전환 효과/scale 확대 애니메이션 적용
      * 고도화시 점선 추가 하면 괜찮을 것 같음

  * FEAT_240122
    * winged_copy (375, 768, 1024)
      * marquee background_text 구현 

  * FEAT_240119
    * main_banner (375, 768, 1024, 1280, 1920)
      * auto sliding 기능 구현
      * play_n_stop 버튼 생성
      * pager click시 page 전환하는 기능 구현
    
  * FEAT_240118
    * header (1024, 1280, 1920)
      * 상단 nav 구현
      * youtube link 연결
    * jquery 연결
    * slick slider script 적용
      
  * FEAT_240117
    * 개발환경 셋팅
      * Noto Sans KR 글꼴 셋팅
      * Create git repository
      * cafe 24 호스팅 (우선 개인 계정으로) 
    * header (375, 768)
      * hover시 background 반전 효과 (transition 적용)
