<!-- Notes that we need to do -->

/\*\* You need to think about lazy loading feature state
and we can create store folder in every feature folder and generate feature reducer and add it to the app/reducers.index.ts

---

<!--
This one generate the initial structure
1. It Generates the RootState Interface
2. It Generated the reducers Object that will be registered in the AppModule
 -->

To Generate the Initial Store Use the below command
ng generate store State --root --module app.module.ts --dry-run
/\*\*This one you use to generate the inital state strucute
ng generate store store/State --root --module ../app.module.ts --dry-run

---

<!--
It generated the reducers File that contains the following
1. It Generated the State Interface
2. It Generated the Initial State Object
3. It Generated the CreateReducer Function with inital State and action
-->

To Generate the The Reducers Structure use the following command
ng generate reducer User --reducers reducers/index.ts --dry-run
ng generate reducer store/User --reducers reducers/index.ts --dry-run

---

To Generate the Action use the following command
ng generate action User --flat false --dry-run

---

<!--
It generated the reducers File that contains the following
1. It Generates the template for Action, Reducer, Selector, Effects
and Register in Root State
-->

To Generate All at once use the following command
ng generate feature news/news --flat --group --reducers ../reducers/index.ts --dry-run
/\*\*\* This you can use to generate state structure and add it to the inital state structure
ng generate feature store/news/news --flat --group --reducers ../reducers/index.ts --dry-run

<!-- Component Store -->
