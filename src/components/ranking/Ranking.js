import React from 'react'
import Scroll from '../../common/scroll/Scroll'
import Loading from '../../common/loading/Loading'
import { getRankingList } from '../../api/ranking'
import { CODE_SUCCESS } from '../../api/config'
import * as RankingModel from '../../model/ranking'

import './ranking.scss'

class Ranking extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            loading: true,
            rankingList: [],
            refreshScroll: false
        }
    }

    componentDidMount() {
        getRankingList().then((res) => {
            console.log("获取排行榜：");
            if (res) {
                console.log(res);
                if (res.code === CODE_SUCCESS) {
                    let topList = [];
                    res.data.topList.forEach(item => {
                        if (/MV/i.test(item.topTitle)) {
                            return;
                        }
                        topList.push(RankingModel.createRankingByList(item));
                    });
                    this.setState({
                        loading: false,
                        rankingList: topList
                    }, () => {
                        //刷新scroll
                        this.setState({refreshScroll:true});
                    });
                }
            }
        });
    }

    render () {
        return (
            <div className="music-ranking">
                <Scroll refresh={this.state.refreshScroll}>
                    <div className="ranking-list">
                        {
                            this.state.rankingList.map(ranking => {
                                return (
                                    <div className="ranking-wrapper" key={ranking.id}>
                                        <div className="left">
                                            <img src={ranking.img} alt={ranking.title}/>
                                        </div>
                                        <div className="right">
                                            <h1 className="ranking-title">
                                                {ranking.title}
                                            </h1>
                                            {
                                                ranking.songs.map((song, index) => {
                                                    return (
                                                        <div className="top-song" key={index}>
                                                            <span className="index">{index + 1}</span>
                                                            <span>{song.name}</span>
                                                            &nbsp;-&nbsp;
                                                            <span className="song">{song.singer}</span>
                                                        </div>
                                                    );
                                                })
                                            }
                                        </div>
                                    </div>
                                );
                            })
                        }

                    </div>
                </Scroll>
                <Loading title="正在加载..." show={this.state.loading}/>
            </div>
        )
    }
}

export default Ranking