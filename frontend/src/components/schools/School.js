import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';
import post1 from './blog-post.1.md';
import post2 from './blog-post.2.md';
import post3 from './blog-post.3.md';
import Stats from './Stats';
import ScrollableModal from './ScrollableModal'
import MapChart from './Map'
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const mainFeaturedPost = {
  title: '普林斯顿大学',
  description:
    "Princeton University",
  image: 'https://www.princeton.edu/sites/default/files/styles/full_2x/public/images/2020/06/20170816_CL_DJA_152%281%29.jpg?itok=oIlZaQT6',
  imageText: 'main image description',
  linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: 'Majors 本科专业',
    date: 'Nov 12',
    description:
      '排名并不能完全代表一所学校的质量。只能作为参考！普林斯顿大学全美排行第一， 全球排名第二， 工程学科排名第五位',
    image: 'https://lh3.googleusercontent.com/proxy/MpW3o7TdZEqtTN9ARJzQ_sR4Y7zJjYE8y_OZym9usSOFMBFtpJu9QkJUur0FFXbGjYBEMvl-gx8ynSLFHeMr61h1gwFfR-DhlFOSCpbTAIVG7s_yQ8VlcFKKJpMVgsOqPbFCPoDWhD78I-ZB4sv6rEyUNEwlIQAnOJ0QDJDc',
    imageText: 'Image Text',
  },
  {
    title: '学校生活 Student Life',
    date: 'Nov 11',
    description:
      '带你体验普林斯顿大学校内校外的生活',
    image: 'https://www.northland.edu/wp-content/uploads/2015/07/skateboard-graduation-1600x450.jpg',
    imageText: 'Image Text'
  }
];

const posts = [post1, post2];

const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  attributes: {
    'summerTemperature': 25,
    'winterTemperature': 3,
    'location': '东海岸',
    'state': '纽约州',
    'city': '纽约',
    'schoolCalendar': '学期制',
    'foundYear': 1890,
  },
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ]
};

const state = 'NY'

export default function School() {

  const [openModal, setOpenModal] = React.useState(false)
  const classes = useStyles();

  const handleCardClicked = (open) => {
    setOpenModal(open);
  };

  return (
    <React.Fragment>
      <Container maxWidth="lg">
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} handleCardClicked={handleCardClicked} />
            ))}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
            <Main title="From the firehose" posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              attributes={sidebar.attributes}
              social={sidebar.social}
            />
          </Grid>
          {
            openModal ?
              <ScrollableModal onClose={() => {handleCardClicked(false)}} />
              : null
          }
        </main>
      </Container>
    </React.Fragment>
  );
}
