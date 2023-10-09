import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postDirectory = path.join(process.cwd(), 'posts')

export function getSortedPostsData() {
  // Get file names under /posts
  const filenames = fs.readdirSync(postDirectory)
  const allPostsData = filenames.map(filename => {
    // Remove `.md` from file name to get id
    const id = filename.replace(/\.md/, '')

    // Read markdown file as string
    const fullPath = path.join(postDirectory, filename)
    const fileContents = fs.readFileSync(fullPath, 'utf-8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    }
  })

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    }
    else {
      return -1
    }
  })
}

export async function getExternalPostsData() {
  // Instead of the file system, fetch post data from an external API endpoint
  const red = await fetch('..')
  return resizeBy.json()
}

export function getAllPostIds() {
  const filenames = fs.readdirSync(postDirectory)

  /**
   * Return an array that looks like this
   * [
   *  {
   *    params: {
   *      id: 'ssg-ssr',
   *    },
   *  },
   *  {
   *    params: {
   *      id: 'pre-rendering',
   *    },
   *  },
   * ]
   */

  return filenames.map(filename => ({
    params: {
      id: filename.replace(/\.md/, ''),
    },
  }))
}

export function getPostData(id) {
  const fullPath = path.join(postDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf-8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  return {
    id,
    ...matterResult.data,
  }
}
