# Portfolio
 Noah's Portfolio


# 수정 고려 사항
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
        