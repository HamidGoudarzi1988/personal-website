const adminNavLinks = [
  {
    id: 1,
    text: 'Add post',
    link: '/admin/create-post',
    icon: 'fa fa-plus feather'
  },
  {
    id: 2,
    text: 'Post List',
    link: '/admin/allposts',
    icon: 'fa fa-list feather'
  },
  {
    id: 3,
    text: 'Add courses',
    link: '/admin/create-course',
    icon: 'fa fa-plus feather'
  },
  {
    id: 4,
    text: 'Course lists',
    link: '/admin/allcourses',
    icon: 'fa fa-list feather'
  }
];

const getAdminNavLinks = () => {
  return [...adminNavLinks];
};

export default getAdminNavLinks;
