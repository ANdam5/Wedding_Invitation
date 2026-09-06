import { Map } from "./map"
import CarIcon from "../../icons/car-icon.svg?react"
import BusIcon from "../../icons/bus-icon.svg?react"
import { LazyDiv } from "../lazyDiv"
import { LOCATION, LOCATION_ADDRESS } from "../../const"

/**
 * 오시는 길 정보를 표시하는 컴포넌트입니다.
 * 지도와 대중교통, 자가용 이용 방법을 안내합니다.
 *
 * @returns {JSX.Element} 오시는 길 섹션
 */
export const Location = () => {
  return (
    <>
      {/* 지도 및 주소 섹션 */}
      <LazyDiv className="card location">
        <h2 className="english">Location</h2>
        <div className="addr">
          {LOCATION}
          <div className="detail">{LOCATION_ADDRESS}</div>
        </div>
        <Map />
      </LazyDiv>

      {/* 대중교통 및 자가용 안내 섹션 */}
      <LazyDiv className="card location">
        {/* 대중교통 안내 */}
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <BusIcon className="transportation-icon" />
          </div>
          <div className="heading">대중교통</div>
          <div />
          <div className="content">
            * 지하철 이용 시
            <br />
            지하철 6호선  <b>삼각지역 13번 출구</b> 400m
            <br />
            지하철 4호선  <b>삼각지역 1번 출구</b> 500m
          </div>
          <div />
          <div className="content">
            * 버스 이용 시
            <br />
            간선(파랑)
            <br />
            - 삼각지역
            <br />
            100, 150, 151, 152, 500, 501, 502
            <br />
            504, 506, 507, 605, 742, 750A, 750B, 752
            <br />
            - 전쟁기념관
            <br />
            421, 740, 110A고려대, 110B국민대
            <br />
            지선(초록) : 용산03
            <br />
          </div>
        </div>

        {/* 자가용 안내 */}
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <CarIcon className="transportation-icon" />
          </div>
          <div className="heading">자가용</div>
          <div />
          <div className="content">
            네이버 지도, 카카오 맵, 티맵 등 이용
            <br />
            <b>국방컨벤션</b> 검색
            <br />
            서울시 용산구 이태원로 22 (용산동 3가 1번지)
            <br />
            주차는 2시간 무료입니다.
            <br />
            (지하주차장에서 웨딩홀 바로 연결)
          </div>
          <div />
          <div className="content">
            <b>※ 삼각지역 부근의 상시 정체로 인해</b>
            <br />
            <b>대중교통 이용을 권장드립니다.</b>
            
          </div>
        </div>
      </LazyDiv>
    </>
  )
}
