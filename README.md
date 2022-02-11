# Portfolio
 Noah's Portfolio


# 수정 고려 사항
<!-- HTML -->

- About
    about__majors > major
        - major를 div 말고 article을 사용해도 괜찮을꺼 같다.
        - title이랑 description을 굳이 div로 사용하지말고, "p or h" 태그로 변경해도 가능할꺼 같다.

- Skills
    * skillset에서 굳이 left와 right를 나눠서 해야 되는걸까?
        float : left로 하면 나머지는 오른쪽으로 붙지 않을까 하는 궁금증? 

    * skill__bar
        div로 bar그래프를 그리는데 다른 더 좋은 방법은 없는지 찾아보자.

    skillset__right > tools__list li
        li 안에 왜 span을 넣어 주는 걸까?
        굳이 span을 넣어 주지 않아도 효과나 그런것들을 적용하는데 무리는 없을거 같은데,
        아니면 "p"로 쓰는 방법도 있지 않나??
        


<!-- CSS -->

- Global
    setting 다시 맞추기.


- Navbar 
    bg color 바꿔주기.


- Home 
    * bg img 다시 pick하기.

    * h태그 색 다시 조정.
    

- About 
    * about__major
        display를 gird로 바꾸고 6개 들어가게 변경하자.

    * major 
        width 값도 생각 해봐야 될듯.


- Skills 
    * view 보면서 수정할 부분 있으면 수정하는 걸로 하자.


- Work 
    * work__project 
        display : flex 인거 grid로 바꿔서 진행하자.

    * work__categories 
        btn_txt 뭔가 마음에 안듬. 중간에 오게 만들자.

    * project__title 폰트 굵기 좀더 굵게 하거나 크기 키우기.

- Contact 
    * bgc 색 바꾸자.
        메인 컬러와 디자인 마음에 드는데로 다시 바꿔서 진행해보자    