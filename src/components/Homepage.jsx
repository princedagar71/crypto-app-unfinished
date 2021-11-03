import React from 'react';

import { Typography, Row, Col, Statistic} from 'antd';
import { Link } from 'react-router-dom';
import millify from 'millify';


import { useGetCryptosQuery } from '../services/cryptoApi';

const {Title} =Typography;


const Homepage = () => {
    const { data,isFetching } = useGetCryptosQuery();
    const globalStats = data?.data?.globalStats;
    console.log(data);

    if(isFetching===undefined) {return 'Loading ...';}

    return (
      <>
      <Title level={2} className="heading">Global Crypto Stats</Title>
      <Row>
          <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total}/></Col>
          <Col span={12}><Statistic title="Total Exchanges" value="5"/></Col>
          <Col span={12}><Statistic title="Total Market Cap" value="5"/></Col>
          <Col span={12}><Statistic title="Total 24th Volumes" value="5"/></Col>
          <Col span={12}><Statistic title="Total Markets" value="5"/></Col>
      </Row>
      </>
    )
}

export default Homepage
