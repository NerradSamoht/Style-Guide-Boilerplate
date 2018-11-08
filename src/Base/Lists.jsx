import React from "react";

const Lists = () => (
  <section id="lists">
    <h2>Lists</h2>

    <section>
      <h3>Unordered List</h3>
      <ul>
        <li>Apples</li>
        <li>Pears</li>
        <li>Oranges</li>
        <li>Bananas</li>
      </ul>
    </section>

    <section>
      <h3>Ordered List</h3>
      <ol>
        <li>First</li>
        <li>Second</li>
        <li>Third</li>
        <li>Fourth</li>
      </ol>
    </section>

    <section>
      <h3>Description List</h3>
      <dl>
        <dt>HTML</dt>
        <dd>Hyper Text Markup Language is used to markup text on the web.</dd>
        <dt>CSS</dt>
        <dd>Cascading Style Sheets are used to style HTML.</dd>
        <dt>JavaScript</dt>
        <dd>JavaScript is the progamming language of the web.</dd>
      </dl>
    </section>
  </section>
);

export default Lists;
