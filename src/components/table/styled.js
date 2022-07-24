import styled from '@emotion/styled'

export const Wrapper = styled.div`
    overflow-y: auto;
    margin: 50px
`;

export const Container = styled.table`
    min-width: 100%;
    text-align: left;
    border-spacing: 0px;
`;

export const Head = styled.thead`
    tr {
        cursor: default;
        opacity: 1;
        &:hover {
            background: gray;
        }
    }
`;

export const Body = styled.tbody``;

export const TR = styled.tr`
    border-bottom: 1px solid gray;
    opacity: 0.8;
    transition: all 0.3s;
    padding:50px;
    &:hover {
        background: red;
        opacity: 1;
    }
`;

export const TD = styled.td`
    border-bottom: 1px solid gray;
    margin: 50px;
    padding:50px;
    font-size: 16px;
    padding: 0px 10px;
    color: black;
        font-size: 14px;
    button {
        margin: 10px 16px 10px 0;
    }
    &.flex {
        display: flex;
    }
    &.message {
        padding: 15px;
        text-align: center;
    }
`;

export const TH = styled.th`
    color: black;
    font-weight: 500;
    border-bottom: 1px solid gray;
    padding: 12px 5px;
    font-size: 16px;
    white-space: nowrap;
    font-size: 14px;
`;
