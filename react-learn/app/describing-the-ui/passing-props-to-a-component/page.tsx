import React from "react"
import Avatar from "./avatar"

interface Children {
  children: React.ReactElement
}

function Card({ children }: Children) {
  return (
    <div className="card">
      {children}
    </div>
  )
}

export default function Profile() {
  const avatar2 = {
    person: {
      name: 'Aklilu Lemma',
      imageId: 'OKS67lh',
    },
    size: 80
  }

  return (
    <>
      <Avatar
        person={{
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2',
        }}
      />
      <Avatar
        {...avatar2}
      />
      <Card>
        <Avatar
          person={{
            name: 'Lin Lanying',
            imageId: '1bX5QH6',
          }}
          size={50}
        />
      </Card>
      <Card>
        <div>Text</div>
      </Card>
    </>
  )
}
