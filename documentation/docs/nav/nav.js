import React from 'react';
import Layout from '@theme/Layout';
import TopNav from '../../../src/navbar';
import { default as TopNavSource }from '!!raw-loader!../../../src/navbar';
import CodeBlock from '@theme/CodeBlock';


export default function MyReactPage() {
  return (
    <Layout>
      <h1>Nav</h1>
      <p>TopNav component for Orfium products integrated to Orfium One suite.</p>
      <br/>

      <TopNav />
      <br/>

      <h2>TL;DR</h2>
      <p>If you are:</p>
      <ol>
        <li>already using yggdrasil</li>
        <li>have a user from Orfium One</li>
        <li>Don't need anything else other than the default Top nav of orfium One </li>
      </ol>
      <p>Copy/paste the code snippet bellow and add your logo and you are good to go</p>
      <CodeBlock language="tsx">{TopNavSource}</CodeBlock>
      <h3>Congrats! You have successfully integrated with Orfium One</h3>
      <br/>
      <br/>
      <br/>
      <p>If you want more on what the TopNavBar can do/provide/whateva </p>
      <p>head over to <a href={'http://ictinus.herokuapp.com/?path=/story/design-system-topappbar--with-logo-placeholder'}>Ictinus documentation</a> for more details.</p>
    </Layout>
  );
}