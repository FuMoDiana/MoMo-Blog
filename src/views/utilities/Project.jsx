import PropTypes from 'prop-types';

// material-ui
import { Box, Card, Grid, Typography } from '@mui/material';

// project imports
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';

// ===============================|| COLOR BOX ||=============================== //

const ColorBox = ({ bgcolor, title, data, dark }) => (
    <>
        <Card sx={{ mb: 3 }}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    py: 4.5,
                    bgcolor,
                    color: dark ? 'grey.800' : '#ffffff'
                }}
            >
                {title && (
                    <Typography variant="subtitle1" color="inherit">
                        {title}
                    </Typography>
                )}
                {!title && <Box sx={{ p: 1.15 }} />}
            </Box>
        </Card>
        {data && (
            <Grid container justifyContent="space-between" alignItems="center">
                <Grid item>
                    <Typography variant="subtitle2">{data.label}</Typography>
                </Grid>
                <Grid item>
                    <Typography variant="subtitle1" sx={{ textTransform: 'uppercase' }}>
                        {data.color}
                    </Typography>
                </Grid>
            </Grid>
        )}
    </>
);

ColorBox.propTypes = {
    bgcolor: PropTypes.string,
    title: PropTypes.string,
    data: PropTypes.object.isRequired,
    dark: PropTypes.bool
};

// ===============================|| UI COLOR ||=============================== //

const Project = () => (
    <MainCard title="项目管理" secondary={<SecondaryAction link="https://next.material-ui.com/system/palette/" />}>
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <SubCard title="项目1">
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <ColorBox bgcolor="primary.light" data={{ label: '描述1', color: '功能1' }} title="预览图1" dark />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <ColorBox bgcolor="primary.200" data={{ label: '描述2', color: '功能2' }} title="预览图2" dark />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <ColorBox bgcolor="primary.main" data={{ label: '描述3', color: '功能3' }} title="预览图3" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <ColorBox bgcolor="primary.dark" data={{ label: '描述4', color: '功能4' }} title="预览图4" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <ColorBox bgcolor="primary.800" data={{ label: '描述5', color: '功能5' }} title="预览图5" />
                        </Grid>
                    </Grid>
                </SubCard>
            </Grid>
            <Grid item xs={12}>
                <SubCard title="项目2">
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <ColorBox bgcolor="primary.light" data={{ label: '描述1', color: '功能1' }} title="预览图1" dark />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <ColorBox bgcolor="primary.200" data={{ label: '描述2', color: '功能2' }} title="预览图2" dark />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <ColorBox bgcolor="primary.main" data={{ label: '描述3', color: '功能3' }} title="预览图3" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <ColorBox bgcolor="primary.dark" data={{ label: '描述4', color: '功能4' }} title="预览图4" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <ColorBox bgcolor="primary.800" data={{ label: '描述5', color: '功能5' }} title="预览图5" />
                        </Grid>
                    </Grid>
                </SubCard>
            </Grid>
            <Grid item xs={12}>
                <SubCard title="项目3">
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <ColorBox bgcolor="primary.light" data={{ label: '描述1', color: '功能1' }} title="预览图1" dark />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <ColorBox bgcolor="primary.200" data={{ label: '描述2', color: '功能2' }} title="预览图2" dark />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <ColorBox bgcolor="primary.main" data={{ label: '描述3', color: '功能3' }} title="预览图3" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <ColorBox bgcolor="primary.dark" data={{ label: '描述4', color: '功能4' }} title="预览图4" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <ColorBox bgcolor="primary.800" data={{ label: '描述5', color: '功能5' }} title="预览图5" />
                        </Grid>
                    </Grid>
                </SubCard>
            </Grid>
            <Grid item xs={12}>
                <SubCard title="项目4">
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <ColorBox bgcolor="primary.light" data={{ label: '描述1', color: '功能1' }} title="预览图1" dark />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <ColorBox bgcolor="primary.200" data={{ label: '描述2', color: '功能2' }} title="预览图2" dark />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <ColorBox bgcolor="primary.main" data={{ label: '描述3', color: '功能3' }} title="预览图3" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <ColorBox bgcolor="primary.dark" data={{ label: '描述4', color: '功能4' }} title="预览图4" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <ColorBox bgcolor="primary.800" data={{ label: '描述5', color: '功能5' }} title="预览图5" />
                        </Grid>
                    </Grid>
                </SubCard>
            </Grid>
            <Grid item xs={12}>
                <SubCard title="项目5">
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <ColorBox bgcolor="primary.light" data={{ label: '描述1', color: '功能1' }} title="预览图1" dark />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <ColorBox bgcolor="primary.200" data={{ label: '描述2', color: '功能2' }} title="预览图2" dark />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <ColorBox bgcolor="primary.main" data={{ label: '描述3', color: '功能3' }} title="预览图3" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <ColorBox bgcolor="primary.dark" data={{ label: '描述4', color: '功能4' }} title="预览图4" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <ColorBox bgcolor="primary.800" data={{ label: '描述5', color: '功能5' }} title="预览图5" />
                        </Grid>
                    </Grid>
                </SubCard>
            </Grid>
        </Grid>
    </MainCard>
);

export default Project;
