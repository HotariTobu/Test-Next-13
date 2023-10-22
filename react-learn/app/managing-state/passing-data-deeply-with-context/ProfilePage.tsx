'use client'

import Heading from './Heading1';
import Section from './Section2';

function Post(props: {
  title: string
  body: string
}) {
  return (
    <div>
      <Section>
        <Heading>
          {props.title}
        </Heading>
        <p><i>{props.body}</i></p>
      </Section>
    </div>
  )
}

function RecentPosts() {
  return (
    <Section>
      <Heading>Recent Posts</Heading>
      <Post
        title="Flavors of Lisbon"
        body="...those pastéis de nata!"
      />
      <Post
        title="Buenos Aires in the rhythm of tango"
        body="I loved it!"
      />
    </Section>
  )
}

function AllPosts() {
  return (
    <Section>
      <Heading>Posts</Heading>
      <RecentPosts />
    </Section>
  )
}

export default function ProfilePage() {
  return (
    <Section>
      <Heading>My Profile</Heading>
      <Post
        title='Hello traveller!'
        body='Read about my adventures.'
      />
      <AllPosts />
    </Section>
  )
}
