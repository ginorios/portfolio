
import React from 'react'
import Display from './Display'

export default function Projects() {
  let projects = [
    {
      id: 1,
      gif: 'Gif goes here.',
      projectTitle: 'Project name.',
      projectLink: 'Project Link',
      projectDescription: 'Project Description'
    }, {
      id: 2,
      gif: 'Gif goes here.',
      projectTitle: 'Project name.',
      projectLink: 'Project Link',
      projectDescription: 'Project Description'
    }
  ]

  let proj = projects.map((mProj) => {
    return (
      <Display
        key={mProj.id}
        {...mProj}
      />
    )
  })

  return (
    <div className='section'>
      {proj}
    </div>

  )
}
