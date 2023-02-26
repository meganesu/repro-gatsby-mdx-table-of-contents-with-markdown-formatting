import { Link } from 'gatsby'
import React from 'react'

import {
  tocWrapper as tocWrapperStyles,
  heading as headingStyles,
} from "./styles.module.css"

const ListItem = ({url, title, items}) => {
  return (
    <>
      <li>
        <Link to={url}>{title}</Link>
      </li>
      {
        items != undefined && (
          <ul>
            {
              items.map(({url, title, items}) => {
                return <ListItem url={url} title={title} items={items} />
              })
            }
          </ul>
        )
      }
    </>
  )
}

const TableOfContents = ({ tableOfContents }) => {
  console.log(tableOfContents)
  return (
    <div>
      <nav aria-label="Table of Contents" className={tocWrapperStyles}>
        <h2 className={headingStyles}>
          Table of Contents
        </h2>
        <ul>
        {
          tableOfContents.items != undefined && (
            tableOfContents?.items.map(({url, title, items}) => {
              return <ListItem url={url} title={title} items={items} />
            })
          )
        }
        </ul>
      </nav>
    </div>
  )
}

export default TableOfContents
